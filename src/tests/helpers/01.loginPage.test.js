import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../../App';
import renderWithRouter from './renderWithRouter'

describe('Testa tela de Login', () => {
  it('testa o input de nome e email', () => {
    renderWithRouter(<App />)
  const inputElement = screen.getAllByRole ('textbox');
  expect(inputElement[0]).toHaveValue('');
  userEvent.type(inputElement[0], 'Daniel de Souza');
  expect(inputElement[0]).toHaveValue('Daniel de Souza');
  
  expect(inputElement[1]).toHaveValue('');
  userEvent.type(inputElement[1], 'daniel@daniel.com');
  expect(inputElement[1]).toHaveValue('daniel@daniel.com');
  })
  it('testa se o botão play está desabilitado ao digitar apenas o nome', () => {
    renderWithRouter(<App />)
    const inputElement = screen.getAllByRole ('textbox');
    const buttonEllement = screen.getByRole('button');
    
    expect(inputElement[0]).toHaveValue('');
    expect(inputElement[1]).toHaveValue('');
    userEvent.type(inputElement[0], 'Daniel de Souza');
    expect(buttonEllement).toBeDisabled();
  })
  it('testa se o botão play está desabilitado se os inputs estiverem vazios', () => {
    renderWithRouter(<App />)
    const inputElement = screen.getAllByRole ('textbox');
    const buttonEllement = screen.getByRole('button');
    
    expect(inputElement[0]).toHaveValue('');
    expect(inputElement[1]).toHaveValue('');
    expect(buttonEllement).toBeDisabled();
  })
  it('testa se o botão play está desabilitado ao digitar apenas o email', () => {
    renderWithRouter(<App />)
    const inputElement = screen.getAllByRole ('textbox');
    const buttonEllement = screen.getByRole('button');
    
    expect(inputElement[0]).toHaveValue('');
    expect(inputElement[1]).toHaveValue('');
    userEvent.type(inputElement[1], 'daniel@daniel.com');
    expect(buttonEllement).toBeDisabled();
  })
  it('testa se o botão play está habilitado ao digitar nome e email', () => {
    renderWithRouter(<App />)
    const inputElement = screen.getAllByRole ('textbox');
    const buttonEllement = screen.getByRole('button');
    
    expect(inputElement[0]).toHaveValue('');
    expect(inputElement[1]).toHaveValue('');
    userEvent.type(inputElement[0], 'Daniel de Souza')
    userEvent.type(inputElement[1], 'daniel@daniel.com');
    expect(buttonEllement).not.toBeDisabled();
  })
})
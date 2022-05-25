import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../../App';
import renderWithRouterAndRedux from './renderWithRouterAndRedux';;

describe('Testa tela de Login', () => {

  it('testa o input de nome e email', () => {
    renderWithRouterAndRedux(<App />)
  const inputElement = screen.getAllByRole ('textbox');
  expect(inputElement[0]).toHaveValue('');
  userEvent.type(inputElement[0], 'Daniel de Souza');
  expect(inputElement[0]).toHaveValue('Daniel de Souza');
  
  expect(inputElement[1]).toHaveValue('');
  userEvent.type(inputElement[1], 'daniel@daniel.com');
  expect(inputElement[1]).toHaveValue('daniel@daniel.com');
  })
  it('testa se o botão play está desabilitado ao digitar apenas o nome', () => {
    renderWithRouterAndRedux(<App />)
    const inputElement = screen.getAllByRole ('textbox');
    const buttonEllement = screen.getAllByRole('button');
    
    expect(inputElement[0]).toHaveValue('');
    expect(inputElement[1]).toHaveValue('');
    userEvent.type(inputElement[0], 'Daniel de Souza');
    expect(buttonEllement[0]).toBeDisabled();
  })
  it('testa se o botão play está desabilitado se os inputs estiverem vazios', () => {
    renderWithRouterAndRedux(<App />)
    const inputElement = screen.getAllByRole ('textbox');
    const buttonEllement = screen.getAllByRole('button');
    
    expect(inputElement[0]).toHaveValue('');
    expect(inputElement[1]).toHaveValue('');
    expect(buttonEllement[0]).toBeDisabled();
  })
  it('testa se o botão play está desabilitado ao digitar apenas o email', () => {
    renderWithRouterAndRedux(<App />)
    const inputElement = screen.getAllByRole ('textbox');
    const buttonEllement = screen.getAllByRole('button');
    
    expect(inputElement[0]).toHaveValue('');
    expect(inputElement[1]).toHaveValue('');
    userEvent.type(inputElement[1], 'daniel@daniel.com');
    expect(buttonEllement[0]).toBeDisabled();
  })
  it('testa se o botão play está habilitado ao digitar nome e email', () => {
    renderWithRouterAndRedux(<App />)
    const inputElement = screen.getAllByRole ('textbox');
    const buttonEllement = screen.getAllByRole('button');

    expect(inputElement[0]).toHaveValue('');
    expect(inputElement[1]).toHaveValue('');

    userEvent.type(inputElement[0], 'Daniel de Souza')
    userEvent.type(inputElement[1], 'daniel@daniel.com');
    expect(buttonEllement[0]).not.toBeDisabled();
  })
  it('verifica botão de configurações', () => {
    renderWithRouterAndRedux(<App />);

    const buttonEllement = screen.getAllByRole('button');
    expect(buttonEllement[1]).toBeInTheDocument();
  })
  it('verifica os data-testId', () => {
    renderWithRouterAndRedux(<App />);

    const inputElement = screen.getAllByRole ('textbox');
    const buttonEllement = screen.getAllByRole('button');

    expect(inputElement[0]).toHaveAttribute('data-testid', 'input-player-name');
    expect(inputElement[1]).toHaveAttribute('data-testid', 'input-gravatar-email');
    expect(buttonEllement[0]).toHaveAttribute('data-testid', 'btn-play');
    expect(buttonEllement[1]).toHaveAttribute('data-testid', 'btn-settings');
    
  })
  it('verifica se botão play redireciona para a tela de jogo', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputElement = screen.getAllByRole ('textbox');
    const buttonEllement = screen.getAllByRole('button');
    const nameElement = screen.findByRole('heading', {name: /daniel de souza/i, level: 4 })

    expect(inputElement[0]).toHaveValue('');
    expect(inputElement[1]).toHaveValue('');

    userEvent.type(inputElement[0], 'Daniel de Souza')
    userEvent.type(inputElement[1], 'daniel@daniel.com');
    expect(buttonEllement[0]).not.toBeDisabled();

    userEvent.click(buttonEllement[0])
    history.push('/teladejogo');

    expect(history.location.pathname).toBe('/teladejogo');
    expect(await nameElement).toBeVisible();
    
  })
  it('verifica se o botão configurações redireciona a pagina', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const buttonEllement = screen.getAllByRole('button');

    userEvent.click(buttonEllement[1])
    history.push('/configuracoes');

    expect(history.location.pathname).toBe('/configuracoes');
  })
})

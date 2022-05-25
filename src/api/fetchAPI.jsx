export const fetchAPI = async () => {
  const URL_API = 'https://opentdb.com/api_token.php?command=request';
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
};

export const fetchTrivia = async () => {
  const token = localStorage.getItem('token');
  const URL_TRIVIA = `https://opentdb.com/api.php?amount=5&token=${token}`;
  const response = await fetch(URL_TRIVIA);
  const perguntas = await response.json();
  return perguntas;
};

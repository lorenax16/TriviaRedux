export function tokenStorage(key, value) {
  return localStorage.setItem(key, value);
}

export function getToken(key) {
  return localStorage.getItem(key);
}

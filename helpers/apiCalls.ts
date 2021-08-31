export const callApi = (route: string, method: string, data?: BodyInit) => {
  return fetch(`http://localhost:3000/api/${route}`, {
    method,
    body: data,
  }).then(response => response.json());
};

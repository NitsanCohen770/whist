export const callApi = (route: string, method: string, data?: {} | []) => {
  const jsonData: BodyInit = JSON.stringify(data);
  return fetch(`http://localhost:3000/api/${route}`, {
    method,
    body: jsonData,
    ...(method === 'POST' && {
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  }).then(response => response.json());
};

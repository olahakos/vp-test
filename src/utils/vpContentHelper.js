export function getContent(apiKey, baseUrl, path) {
  return fetch(`${baseUrl}${path}`)
      .then(data => {
        return data.json();
      })
      .catch((err) => {
        throw err;
      });
}

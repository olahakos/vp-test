require('whatwg-fetch');

export function getContent(apiKey, baseUrl, path) {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}${path}`)
      .then(data => {
        resolve(data.json());
      })
      .catch((err) => {
        reject(err);
      });
  });
}

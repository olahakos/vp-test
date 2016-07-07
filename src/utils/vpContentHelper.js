export function getContent(url) {
  return fetch(`${url}`)
      .then(data => {
        return data.json();
      })
      .catch((err) => {
        throw err;
      });
}

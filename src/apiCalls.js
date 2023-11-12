function getAllCharacters() {
  return fetch('https://akabab.github.io/superhero-api/api/all.json').then(
    (response) => {
      if (!response.ok && response.state >= 500) {
        throw new Error(
          `${response.status} ${response.statusText}: We're sorry. Something went wrong with the server. Please try again.`
        );
      }

      if (!response.ok && response.status >= 400 && response.status < 500) {
        throw new Error(
          `${response.status} ${response.statusText}: Oops! Something went wrong. Please try again.`
        );
      }

      return response.json();
    }
  );
}

export { getAllCharacters };

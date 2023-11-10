function getAllCharacters() {
  return fetch('https://akabab.github.io/superhero-api/api/all.json').then(
    (response) => {
      if (!response.ok) {
        throw new Error('Oops! Something went wrong. Please try again.');
      }
      return response.json();
    }
  );
}

export { getAllCharacters };

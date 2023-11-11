function getAllCharacters() {
  return fetch('https://akabab.github.io/superhero-api/api/all.json').then(
    (response) => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    }
  );
}

export { getAllCharacters };

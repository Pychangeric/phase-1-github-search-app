// Search for users with the name "octocat"
fetch('https://api.github.com/search/users?q=octocat')
  .then(response => response.json())
  .then(data => {
    // Get the first user's public repositories
    const userReposUrl = data.items[0].repos_url;
    return fetch(userReposUrl);
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
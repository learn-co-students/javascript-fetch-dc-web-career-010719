const app = "I don't do much.";
const token = '67b834962aec15430f243bbc297ba6a4b6ffe5a5';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));

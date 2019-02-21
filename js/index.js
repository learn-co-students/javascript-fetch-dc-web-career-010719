const app = "I don't do much.";
const token = ' b505de8bd9267637dcfc86dbe16bc37e6e7338ab';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));

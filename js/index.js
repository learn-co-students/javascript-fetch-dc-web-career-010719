const token = '6ea579b4703479bf7eb81dca69b3fb8731b38b70'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json))

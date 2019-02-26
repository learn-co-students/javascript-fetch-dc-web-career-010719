const token = 'Haha!! You will NEVER get my TOOKKKKEEEENNN!!!!!';
fetch('https://api.github.com/users/Dusty211/repos',
{ headers: { Authorization: `token ${token}` }  })
.then(res => res.json())
.then(json => console.log(json));

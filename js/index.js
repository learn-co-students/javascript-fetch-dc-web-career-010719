const app = "I don't do much.";

const token = ''
 
fetch('https://github.com/learn-co-curriculum/javascript-fetch-lab', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
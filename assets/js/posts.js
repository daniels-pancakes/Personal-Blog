const returnButton = document.querySelector('#return');

posts = JSON.parse(localStorage.getItem('posts'));

for (let i = 0; i < posts.length; i++) {
console.log(

`
HANDLE: ${posts[i].poster}
SUBJECT: ${posts[i].title}
MESSAGE: ${posts[i].content}
${posts[i].mm+1}/${posts[i].dd}/${posts[i].yy}, ${posts[i].hh}:${posts[i].tt} 
`);
};

returnButton.addEventListener('click', function (event) {
    window.location.href = "index.html";
});
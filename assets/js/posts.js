const returnButton = document.querySelector('#return');
const postContainer = document.querySelector('main')


posts = JSON.parse(localStorage.getItem('posts'));



for (let i = 0; i < posts.length; i++) {
console.log(

`
HANDLE: ${posts[i].poster}
SUBJECT: ${posts[i].title}
MESSAGE: ${posts[i].content}
${posts[i].mm+1}/${posts[i].dd}/${posts[i].yy}, ${posts[i].hh}:${posts[i].tt} 
`);

const article = document.createElement('article');
const postSubject = document.createElement('div')
const postHandleDate = document.createElement('div')
const postContent = document.createElement('div')
postSubject.className = 'subject';
postHandleDate.className = 'handle-date';
postContent.className = 'post-content';
postSubject.textContent = posts[i].title;
postHandleDate.textContent = `by ${posts[i].poster} on ${posts[i].mm+1}/${posts[i].dd}/${posts[i].yy}, ${posts[i].hh}:${posts[i].tt}`;
postContent.textContent = posts[i].content;
article.appendChild(postSubject);
article.appendChild(postHandleDate);
article.appendChild(postContent);
postContainer.appendChild(article);
};

returnButton.addEventListener('click', function (event) {
    window.location.href = "index.html";
});
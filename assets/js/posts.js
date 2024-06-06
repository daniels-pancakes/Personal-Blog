const returnButton = document.querySelector('#return');
const postContainer = document.querySelector('main')
const modeButton = document.querySelector('#toggle-mode');
const body = document.querySelector('body')
const footer = document.querySelector('footer')
const anchor = document.querySelector('a')
let subject = document.querySelector('.subject')

let mode;
if (localStorage.getItem('mode') === null) {
    localStorage.setItem('mode', 'lightMode');
    let mode = localStorage.getItem('mode');
} else if (localStorage.getItem('mode') === 'darkMode') {
    body.classList.add('dark');
    returnButton.classList.add('dark');
    modeButton.classList.add('dark');
    anchor.classList.add('dark');
    localStorage.setItem('mode', 'darkMode');
    modeButton.textContent = 'LIGHT MODE';

};

if (localStorage.getItem('posts') === null) {

    postContainer.textContent = 'THERE ARE CURRENTLY NO POSTS TO DISPLAY. PLEASE USE THE RETURN BUTTON TO ENTER POSTS.';
} else {

posts = JSON.parse(localStorage.getItem('posts'));
for (let i = 0; i < posts.length; i++) {
    console.log(
    `HANDLE: ${posts[i].poster}
    SUBJECT: ${posts[i].title}
    MESSAGE: ${posts[i].content}
    ${posts[i].mm+1}/${posts[i].dd}/${posts[i].yy}, ${posts[i].hh}:${posts[i].tt}`);

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
    }
};
returnButton.addEventListener('click', function () {
    window.location.href = "index.html";
    });
modeButton.addEventListener('click', function () {
    if (localStorage.getItem('mode') === 'darkMode') {
            body.classList.remove('dark');
            document.querySelector('.subject').classList.remove('dark');
            returnButton.classList.remove('dark');
            modeButton.classList.remove('dark');
            footer.classList.remove('dark');
            anchor.classList.remove('dark');
            localStorage.setItem('mode', 'lightMode');
            modeButton.textContent = 'DARK MODE';
            }
    else if (localStorage.getItem('mode') === 'lightMode') {
        body.classList.add('dark');
        document.querySelector('.dark .subject').classList.add('dark');
        returnButton.classList.add('dark');
        modeButton.classList.add('dark');
        footer.classList.add('dark');
        anchor.classList.add('dark');
        localStorage.setItem('mode', 'darkMode');
        modeButton.textContent = 'LIGHT MODE';

        } 
    });
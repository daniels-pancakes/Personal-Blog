// Get handle on HTML elements we are going to be connecting our JS to.
// Capture these as variables for easy reference in our code.
const returnButton = document.querySelector('#return');
const postContainer = document.querySelector('main');
const modeButton = document.querySelector('#toggle-mode');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const anchor = document.querySelector('a');
let subject = document.querySelector('.subject');

// Initialization to first check if Dark/Light Mode preference settings exist.
// If no preferences found, defaults to Light Mode. If preferences exist, adds Dark Mode Styling
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

// Handling if user arrives to Posts page without any Local Storage
// or user happens to clear cache of Local Storage while on Posts page
if (localStorage.getItem('posts') === null) {
    postContainer.innerHTML = '<span style="color:red; font-size:20px; text-align:center; margin-top:25vh; margin-left:10%; margin-right:10%;"> THERE ARE CURRENTLY NO POSTS TO DISPLAY. PLEASE USE THE RETURN BUTTON TO ENTER POSTS. </span>';
} else {

// Sorting of array by descending order of date.
let posts = JSON.parse(localStorage.getItem('posts'));
posts.sort((a, b) => {
     const dateA = new Date(a.yy, a.mm, a.dd, a.hh, a.tt);
     const dateB = new Date(b.yy, b.mm, b.dd, b.hh, b.tt);
     return dateB - dateA;
 });

// For loop iterates over array, populate HTML elements and append to content container
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

// Return button to navigate back to form page.
returnButton.addEventListener('click', function () {
    window.location.href = "index.html";
    });

// Dark/Light Mode toggle button logic.
// The logic is extensive here to account for returned null array.
// If posts array returns null the logic must account for the missing elements to prevent errors.
modeButton.addEventListener('click', function () {
    if (localStorage.getItem('posts') === null && localStorage.getItem('mode') === 'lightMode') {
        body.classList.add('dark');
        returnButton.classList.add('dark');
        modeButton.classList.add('dark');
        footer.classList.add('dark');
        anchor.classList.add('dark');
        localStorage.setItem('mode', 'darkMode');
        modeButton.textContent = 'LIGHT MODE';
        }
    else if (localStorage.getItem('posts') === null && localStorage.getItem('mode') === 'darkMode') {
        body.classList.remove('dark');
        returnButton.classList.remove('dark');
        modeButton.classList.remove('dark');
        footer.classList.remove('dark');
        anchor.classList.remove('dark');
        localStorage.setItem('mode', 'lightMode');
        modeButton.textContent = 'DARK MODE';
        }        
    else if (localStorage.getItem('mode') === 'darkMode') {
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
// Get handle on HTML elements we are going to be connecting our JS to.
// Capture these as variables for easy reference in our code.
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const postInput = document.querySelector('#postbody');
const submitButton = document.querySelector('#submit');
const feedback = document.querySelector('#feedback');
const access = document.querySelector('h3');

let mode;
if (localStorage.getItem('mode') === null) {
    localStorage.setItem('mode', 'lightMode');
    let mode = localStorage.getItem('mode');
} else if (localStorage.getItem('mode') === 'lightMode') {}
else if (localStorage.getItem('mode') === 'darkMode') {};
let posts;

if (localStorage.getItem('posts') !== null) {
posts = JSON.parse(localStorage.getItem('posts'));}
else { posts = [];}

function capPost() {
    const post = {
        poster: usernameInput.value,
        title: titleInput.value,
        content: postInput.value,
        dd: new Date().getDate(),
        hh: new Date().getHours(),
        tt: new Date().getMinutes(),
        mm: new Date().getMonth(),
        yy: new Date().getFullYear(),
        }
    posts.push(post)
    localStorage.setItem('posts', JSON.stringify(posts));
}

function giveFeedback(type, message) {
    feedback.textContent = message;
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

// Blank input handling
    if (usernameInput.value === '') {
      giveFeedback('error', 'ERROR. NO HANDLE ENTERED.');
    } else if (titleInput.value === '') {
      giveFeedback('error', 'ERROR. NO SUBJECT ENTERED.');
    } else if (postInput.value === '') {
        giveFeedback('error', 'ERROR. NO MESSAGE ADDED.');
    } else {
        giveFeedback('success', 'MESSAGE SUBMITTED.');
        capPost();
        access.style.color = 'aquamarine';
        access.style.color = 'black';
        access.style.color = 'aquamarine';
        window.location.href = "posts.html";
    }
});

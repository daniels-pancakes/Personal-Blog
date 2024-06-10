// Get handle on HTML elements we are going to be connecting our JS to.
// Capture these as variables for easy reference in our code.
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const postInput = document.querySelector('#postbody');
const submitButton = document.querySelector('#submit');
const feedback = document.querySelector('#feedback');
const access = document.querySelector('h3');
const logo = document.querySelector('#logo');
const body = document.querySelector('body');
const formContainer = document.querySelector('#form-container');
const form = document.querySelector('#form');

// Logic to check for light/dark mode selection. 
// If no mode preference detected from Local Storage, defaults to Light Mode
let mode;
if (localStorage.getItem('mode') === null) {
    localStorage.setItem('mode', 'lightMode');
    let mode = localStorage.getItem('mode');
} else if (localStorage.getItem('mode') === 'lightMode') {
    logo.classList.remove('dark');
    body.classList.remove('dark');
    form.classList.remove('dark');
    postInput.classList.remove('dark');
    titleInput.classList.remove('dark');
    formContainer.classList.remove('dark');
    submitButton.classList.remove('dark');
}
else if (localStorage.getItem('mode') === 'darkMode') {
    logo.classList.add('dark');
    body.classList.add('dark');
    form.classList.add('dark');
    postInput.classList.add('dark');
    titleInput.classList.add('dark');
    usernameInput.classList.add('dark');
    formContainer.classList.add('dark');
    submitButton.classList.add('dark');
};

// Declares posts variable which will be used momentarily to create array.
let posts;

// Check whether Local Storage exists for post array. If not initialize empty array.
if (localStorage.getItem('posts') !== null) {
posts = JSON.parse(localStorage.getItem('posts'));}
else {posts = [];}

// Create function that builds objects out of posts. Pushes posts to array. Finally storing them in Local Storage.
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

// This function is part of mechanism for providing feedback for user inputs.
function giveFeedback(type, message) {
    feedback.textContent = message;
    feedback.className = '';
    feedback.classList.add(type);
}

// Event handler that will respond to button press.
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
// This is the other part of the above mechanism to handle and respond to blank input handling.
    if (usernameInput.value === '') {
      giveFeedback('error', 'ERROR. NO HANDLE ENTERED.')
    } else if (titleInput.value === '') {
      giveFeedback('error', 'ERROR. NO SUBJECT ENTERED.');
    } else if (postInput.value === '') {
        giveFeedback('error', 'ERROR. NO MESSAGE ADDED.');
    } else {
        giveFeedback('success', 'MESSAGE SUBMITTED.');
        capPost();
        access.style.color = 'aquamarine';
        window.location.href = "posts.html";
    }
});

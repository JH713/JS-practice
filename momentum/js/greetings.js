const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const firstPage = document.querySelector("#first-page");
const mainPage = document.querySelector("#main-page");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings()
{
	const username = localStorage.getItem(USERNAME_KEY);
	greeting.innerText = `Hi, ${username}`;
	mainPage.classList.remove(HIDDEN_CLASSNAME);
	firstPage.classList.add(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
	event.preventDefault();
	firstPage.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	paintGreetings();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername) {
	paintGreetings();
} else {
	firstPage.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
}
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const firstPage = document.querySelector("#first-page");
const mainPage = document.querySelector("#main-page");
const logout = document.getElementById("logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings()
{
	const username = localStorage.getItem(USERNAME_KEY);
	greeting.innerText = `Hi, ${username}`;
	mainPage.classList.remove(HIDDEN_CLASSNAME);
	firstPage.classList.add(HIDDEN_CLASSNAME);
	logout.addEventListener("click", onLogoutClick);
}

function onLoginSubmit(event) {
	event.preventDefault();
	firstPage.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	paintGreetings();
}

function onLogoutClick(event) {
	localStorage.removeItem(USERNAME_KEY);
	localStorage.removeItem("todos");
	window.location.reload();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername) {
	paintGreetings();
} else {
	firstPage.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
}
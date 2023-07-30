const quotes = [
	{
		quote: "In three words I can sum up everything I’ve learned about life: it goes on.",
		author: "Robert Frost",
	},
	{
		quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
		author: "Maya Angelou",
	},
	{
		quote: "It’s better to be hated for what you are than to be loved for what you are not.",
		author: "Andre Gide",
	},
	{
		quote: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma - which is living with the results of other people’s thinking.",
		author: "Steve Jobs",
	},
	{
		quote: "I would say that his inspiration was that he thought rainbows were beautiful.",
		author: "Richard Feynman",
	},
	{
		quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
		author: "Winston Churchill",
	},
	{
		quote: "I am a great believer in luck, and I find the harder I work, the more I have of it.",
		author: "Thomas Jefferson",
	},
	{
		quote: "The future belongs to those who believe in the beauty of their dreams.",
		author: "Eleanor Roosevelt",
	},
	{
		quote: "The only way to do great work is to love what you do.",
		author: "Steve Jobs",
	},
	{
		quote: "Every strike brings me closer to the next home run.",
		author: "Babe Ruth",
	}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = "\"" + String(todaysQuote.quote)+"\"";
author.innerText = String(todaysQuote.author);
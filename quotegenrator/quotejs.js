const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson"
];

const quoteElement = document.getElementById("quote");
const newQuoteButton = document.getElementById("newQuoteButton");

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

newQuoteButton.addEventListener("click", function () {
    const randomQuote = getRandomQuote();
    quoteElement.textContent = randomQuote;
});

// Initial quote display
const initialQuote = getRandomQuote();
quoteElement.textContent = initialQuote;

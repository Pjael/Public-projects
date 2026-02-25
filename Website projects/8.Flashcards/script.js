// Sample flashcard data
const flashcards = [
    {
        question: "What is the difference between var, let, and const?",
        answer: "var is function-scoped and can be redeclared. let is block-scoped and cannot be redeclared. const is block-scoped and cannot be reassigned."
    },
    {
        question: "What is a closure in JavaScript?",
        answer: "A closure is a function that has access to variables in its outer (enclosing) scope, even after the outer function has returned."
    },
    {
        question: "What does 'this' refer to in JavaScript?",
        answer: "'this' refers to the object that is executing the current function. Its value depends on how the function is called."
    },
    {
        question: "What is the difference between == and ===?",
        answer: "== compares values with type coercion, while === compares values and types without any conversion."
    },
    {
        question: "What is a promise in JavaScript?",
        answer: "A promise is an object that represents the eventual completion (or failure) of an async operation and its resulting value."
    }
];

let currentCardIndex = 0;
let isAnswerShown = false;

const cardText = document.getElementById('cardText');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const cardContainer = document.getElementById('cardContainer');

// Initialize the first card
function loadCard(index) {
    const card = flashcards[index];
    cardText.textContent = card.question;
    isAnswerShown = false;
    showAnswerBtn.textContent = 'Show Answer';
    cardContainer.style.backgroundColor = '#fff';

    updateProgress();
    updateButtonStates();
}

function updateProgress() {
    const percentComplete = ((currentCardIndex + 1) / flashcards.length) * 100;
    progressBar.style.width = percentComplete + '%';
    progressText.textContent = (currentCardIndex + 1) + ' of ' + flashcards.length;
}

function updateButtonStates() {
    prevBtn.disabled = currentCardIndex === 0;
    nextBtn.disabled = currentCardIndex === flashcards.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        loadCard(currentCardIndex);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentCardIndex < flashcards.length - 1) {
        currentCardIndex++;
        loadCard(currentCardIndex);
    }
});

showAnswerBtn.addEventListener('click', () => {
    const card = flashcards[currentCardIndex];
    if (!isAnswerShown) {
        cardText.textContent = card.answer;
        showAnswerBtn.textContent = 'Hide Answer';
        cardContainer.style.backgroundColor = '#f9f3e6';
        isAnswerShown = true;
    } else {
        cardText.textContent = card.question;
        showAnswerBtn.textContent = 'Show Answer';
        cardContainer.style.backgroundColor = '#fff';
        isAnswerShown = false;
    }
});

// Load the first card
loadCard(currentCardIndex);


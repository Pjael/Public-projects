// 1️⃣ Flashcards data
const flashcards = [
    {
        question: "What is the difference between var, let, and const?",
        answer: "In JavaScript, var is function-scoped and can be re-declared; let and const are block-scoped, with let allowing re-assignment and const preventing it. However, const objects can have their contents modified."
    },
    {
        question: "What is a closure in JavaScript?",
        answer: "A closure is a function that has access to variables from its outer scope even after the outer function has returned."
    },
    {
        question: "What is the difference between == and ===?",
        answer: "== compares values after type coercion, while === compares both value and type strictly."
    }
    // Add more flashcards here
];

// 2️⃣ Current flashcard index
let currentIndex = 0;

// 3️⃣ Select DOM elements
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const showBtn = document.getElementById("show-btn");
const addBtn = document.getElementById("add-btn");

// 4️⃣ Function to render a flashcard
function renderFlashcard() {
    const card = flashcards[currentIndex];
    questionEl.textContent = card.question;
    answerEl.textContent = card.answer;
    answerEl.classList.add("d-none"); // hide answer by default

    // Update progress
    const percent = Math.round(((currentIndex + 1) / flashcards.length) * 100);
    progressBar.style.width = percent + "%";
    progressBar.textContent = percent + "%";
    progressText.textContent = `${currentIndex + 1} of ${flashcards.length}`;

    // Disable buttons at boundaries
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === flashcards.length - 1;
}

// 5️⃣ Event listeners
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderFlashcard();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        renderFlashcard();
    }
});

showBtn.addEventListener("click", () => {
    answerEl.classList.toggle("d-none");
});

// Add new flashcard via prompt inputs
function addNewFlashcard() {
    const q = prompt("Enter the question for the new flashcard:");
    if (!q) return; // cancelled or empty
    const a = prompt("Enter the answer for the new flashcard:");
    if (a === null || a === undefined) return; // cancelled

    flashcards.push({ question: q.trim(), answer: a.trim() });
    // Jump to the newly added card
    currentIndex = flashcards.length - 1;
    renderFlashcard();
}

if (addBtn) {
    addBtn.addEventListener("click", addNewFlashcard);
}

// 6️⃣ Initial render
renderFlashcard();


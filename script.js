let currentQuestion = 1;
const totalQuestions = 10;


// Array of correct answers
const correctAnswers = [
    "Rocket City",
    "Marshall Space Flight Center",
    "Space and Rocket Center",
    "Huntsville Botanical Garden",
    "Saturn V",
    "Twickenham",
    "Hiking",
    "University of Alabama in Huntsville",
    "U.S. Space & Rocket Center",
    "Water Cress Capital of the World"
];


function checkAnswer(questionNumber) {
    const answerInput = document.getElementById(`answer${questionNumber}`);
    const feedback = document.getElementById(`feedback${questionNumber}`);


    if (answerInput.value.trim().toLowerCase() === correctAnswers[questionNumber - 1].toLowerCase()) {
        feedback.textContent = "Correct! Well done.";
        feedback.classList.add('correct'); // Add class for correct feedback
    } else {
        feedback.textContent = "Incorrect. Try again!";
        feedback.classList.remove('correct'); // Remove class for incorrect feedback
    }


    // Move to the next question only if the current one was answered correctly
    if (questionNumber < totalQuestions) {
        const nextQuestion = document.getElementById(`question${questionNumber + 1}`);
        nextQuestion.style.display = "block"; // Show the next question
        answerInput.value = ""; // Clear input for the next question
    }
}


// Show the first question initially
document.addEventListener("DOMContentLoaded", function() {
    const firstQuestion = document.getElementById("question1");
    firstQuestion.style.display = "block"; // Show the first question
});


// Handle Enter key for the input field to submit answers
document.querySelectorAll('.answer-input').forEach((input, index) => {
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkAnswer(index + 1); // Pass the current question number
        }
    });
});

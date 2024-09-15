// Define the quiz questions and answers
const quizzes = [
    {
        question: "What is chemiosynthesis?",
        options: [
            "A process of photosynthesis without light",
            "A method of converting sunlight into energy",
            "A process by which organisms produce energy from inorganic chemicals",
            "A type of cellular respiration"
        ],
        answer: 2 // Index of the correct answer in the options array
    },
    {
        question: "Which moon is known for having a subsurface ocean where chemiosynthesis might occur?",
        options: [
            "Mars",
            "Titan",
            "Europa",
            "Enceladus"
        ],
        answer: 2
    },
    {
        question: "In chemiosynthesis, what is typically used as an energy source?",
        options: [
            "Sunlight",
            "Organic molecules",
            "Inorganic molecules like hydrogen sulfide",
            "Nucleic acids"
        ],
        answer: 2
    },
    {
        question: "What type of environments are suitable for chemiosynthesis?",
        options: [
            "High-light environments",
            "High-temperature environments",
            "Dark and extreme environments",
            "Oxygen-rich environments"
        ],
        answer: 2
    }
];

// Function to render quiz questions
function renderQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ''; // Clear any previous content

    quizzes.forEach((quiz, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('quiz-question');

        const questionTitle = document.createElement('h2');
        questionTitle.textContent = `Q${index + 1}: ${quiz.question}`;
        questionElement.appendChild(questionTitle);

        quiz.options.forEach((option, i) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('quiz-option');

            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question-${index}`;
            optionInput.value = i;

            const optionLabel = document.createElement('label');
            optionLabel.textContent = option;

            optionElement.appendChild(optionInput);
            optionElement.appendChild(optionLabel);

            questionElement.appendChild(optionElement);
        });

        quizContainer.appendChild(questionElement);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', checkAnswers);
    quizContainer.appendChild(submitButton);
}

// Function to check quiz answers
function checkAnswers() {
    let score = 0;

    quizzes.forEach((quiz, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === quiz.answer) {
            score++;
        }
    });

    const resultElement = document.createElement('div');
    resultElement.classList.add('quiz-result');
    resultElement.textContent = `You scored ${score} out of ${quizzes.length}!`;
    
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ''; // Clear the quiz content
    quizContainer.appendChild(resultElement);
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', renderQuiz);

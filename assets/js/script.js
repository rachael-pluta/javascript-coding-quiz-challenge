var startButton = document.getElementById('start-quiz')
var mainHeading = document.getElementById('quiz-heading')
var startPara = document.getElementById('start-para')
var timerElement = document.getElementById('countdown')
var nextButton = document.getElementById('answer-button')
var questionContainer = document.getElementById('question-container')
let randomisedQuestions, currentQuestion;
var questionsElement = document.getElementById('questions')
var answersElement = document.getElementById('answer-button')
var finalScoreElement = document.getElementById('final-score')
var inputInitialsElement = document.getElementById('input-initials')

startButton.addEventListener('click', countdown)
startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestion++
    determineQuestion()
})

function countdown() {
    console.log('started timer')
    var timeLeft = 20;

    var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerElement` to show the remaining seconds
      timerElement.textContent = timeLeft + ' seconds left';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerElement.textContent = timeLeft + ' second left';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerElement` to an empty string
      timerElement.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `timeUp()` function
      timeUp();
    }
  }, 1000);
}

function startQuiz() {
    console.log('Started')
    startButton.classList.add('hidden')
    mainHeading.classList.add('hidden')
    startPara.classList.add('hidden')
    randomisedQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestion = 0
    determineQuestion()
}

function determineQuestion() {
    resetState()
    displayQuestion(randomisedQuestions[currentQuestion])
    questions.answers
}

function displayQuestion(questions) {
    questionsElement.innerText = questions.quest
    questionContainer.classList.remove('hidden')
    answersElement.classList.remove('hidden')
    questions.ans.forEach(ans => {
        var ansbtn = document.createElement('ansbtn')
        ansbtn.innerText = ans.text
        ansbtn.classList.add('answer-btn')
        if (ans.isCorrect) {
            ansbtn.dataset.isCorrect = ans.isCorrect
        }
        ansbtn.addEventListener('click', chooseAnswer)
        answersElement.appendChild(ansbtn)
    })
}

function resetState() {
    nextButton.classList.add('hidden')
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild)
    }
}

function chooseAnswer(e) {
    var chosenAnswer = e.target
    var isCorrect = chosenAnswer.dataset.isCorrect
    setCorrectStatus(document.body, isCorrect)
    Array.from(answersElement.children).forEach(ansbtn => {
        setCorrectStatus(ansbtn, ansbtn.dataset.isCorrect)
    })
    if (randomisedQuestions.length > currentQuestion + 1) {
        nextButton.classList.remove('hidden')
    }
    else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hidden')
    }
}

function setCorrectStatus(element, isCorrect) {
    clearCorrectStatus(element)
    if (isCorrect) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}

function clearCorrectStatus(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function timeUp() {
    questionContainer.classList.add('hidden')
    mainHeading.classList.remove('hidden')
    mainHeading.innerText = "Time's Up!"
    finalScoreElement.classList.remove('hidden')
}


var questions = [
    {
        quest: "Arrays in JavaScript can be used to store: ________.",
        ans: [
            { text: "a. numbers and strings", isCorrect: false },
            { text: "b. other arrays", isCorrect: false },
            { text: "c. booleans", isCorrect: false },
            { text: "d. all of the above", isCorrect: true },
        ]
    },
    {
        quest: "String values must be enclosed within ______ when being assigned to variables.",
        ans: [
            { text: "a. commas", isCorrect: false },
            { text: "b. curly brackets", isCorrect: false },
            { text: "c. quotes", isCorrect: true },
            { text: "d. parenthesis", isCorrect: false },
        ]
    },
    {
        quest: "Commonly used data types do NOT include: ___________.",
        ans: [
            { text: "a. strings", isCorrect: false },
            { text: "b. booleans", isCorrect: false },
            { text: "c. alerts", isCorrect: true },
            { text: "d. numbers", isCorrect: false },
        ]
    },
    {
        quest: "The condition in an if / else statement is enclosed with: _________.",
        ans: [
            { text: "a. quotes", isCorrect: false },
            { text: "b. curly brackets", isCorrect: false },
            { text: "c. parenthesis", isCorrect: true },
            { text: "d. square brackets", isCorrect: false },
        ]
    },
    {
        quest: "A very useful tool used during development and debugging for printing content to the debugger is: ________.",
        ans: [
            { text: "a. JavaScript", isCorrect: false },
            { text: "b. terminal/bash", isCorrect: false },
            { text: "c. for loops", isCorrect: false },
            { text: "d. console.log", isCorrect: true },
        ]
    }
]
var startButton = document.getElementById('start-quiz')
var mainHeading = document.getElementById('quiz-heading')
var startPara = document.getElementById('start-para')
var timerElement = document.getElementById('countdown')
var questionContainer = document.getElementById('question-container')
let randomisedQuestions, currentQuestion;
var questionsElement = document.getElementById('questions')
var answersElement = document.getElementById('answer-button')
var submitPage = document.getElementById('submit-page')
var submitButton = document.getElementById('submit')
var timeLeft = 60;
var correctMsg = document.getElementById('correct-msg')
var finalScore = document.getElementById('final-score')
var userScore = []
var initials = document.getElementById('initials')


// Starts the timer on clicking start quiz button
startButton.addEventListener('click', countdown)


// Sets the quiz timer
function countdown() {
    console.log('started timer')

    var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerElement` to show the remaining seconds
      timerElement.textContent = timeLeft + ' seconds left'
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerElement.textContent = timeLeft + ' second left'
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerElement` to an empty string
      timerElement.textContent = ''
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval)
      // Call the `allDone()` function
      allDone();
    }
  }, 1000);
}

// Starts the quiz questions on clicking start quiz button
startButton.addEventListener('click', startQuiz)

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
    correctMsg.textContent = ''
    document.body.classList = ''
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
    answersElement.classList.add('hidden')
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild)
    }
}

answersElement.addEventListener('click', function(event) {
    var buttonText = event.target.textContent
    if (questions[currentQuestion].ans.findIndex(function (element){
        console.log(element.text, buttonText)
        return element.text === buttonText && element.isCorrect === true
    }) > -1) {
        correctMsg.textContent = 'Correct!'
        document.body.classList.add('correct')
    }
    else {
        correctMsg.textContent = 'Incorrect!'
        document.body.classList.add('wrong')
        timeLeft = timeLeft - 5
    }
    currentQuestion++
    setTimeout(determineQuestion, 500)
})

function chooseAnswer(e) {
    var chosenAnswer = e.target
    var isCorrect = chosenAnswer.dataset.isCorrect
    Array.from(answersElement.children).forEach(ansbtn => {
    })
    if (randomisedQuestions.length > currentQuestion + 1) {
    }
    else {
        allDone()
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

function allDone() {
    questionContainer.classList.add('hidden')
    timerElement.classList.add('hidden')
    submitPage.classList.remove('hidden')
    mainHeading.classList.remove('hidden')
    mainHeading.innerText = 'Submit your score!'
    submitButton.classList.remove('hidden')
    finalScore.textContent = 'Your final score is: ' + timeLeft
    submitHighScores()
}

// Change this function to submitHighScores
function submitHighScores() {
    userScore.push({
       initials: initials.value, 
       finalScore: timeLeft
    })
    localStorage.setItem('initials', JSON.stringify(userScore))
}

submitButton.addEventListener('click', showHighScores)


// Create function showHighScores
// userScores = JSON.parse(localStorage.getItem('initials'))
// then do a loop on userScores
// once you have data, create li's inside ol's



// Quiz questions
var questions = [
    {
        quest: 'Arrays in JavaScript can be used to store: ________.',
        ans: [
            { text: 'a. numbers and strings', isCorrect: false },
            { text: 'b. other arrays', isCorrect: false },
            { text: 'c. booleans', isCorrect: false },
            { text: 'd. all of the above', isCorrect: true },
        ]
    },
    {
        quest: 'String values must be enclosed within ______ when being assigned to variables.',
        ans: [
            { text: 'a. commas', isCorrect: false },
            { text: 'b. curly brackets', isCorrect: false },
            { text: 'c. quotes', isCorrect: true },
            { text: 'd. parenthesis', isCorrect: false },
        ]
    },
    {
        quest: 'Commonly used data types do NOT include: ___________.',
        ans: [
            { text: 'a. strings', isCorrect: false },
            { text: 'b. booleans', isCorrect: false },
            { text: 'c. alerts', isCorrect: true },
            { text: 'd. numbers', isCorrect: false },
        ]
    },
    {
        quest: 'The condition in an if / else statement is enclosed with: _________.',
        ans: [
            { text: 'a. quotes', isCorrect: false },
            { text: 'b. curly brackets', isCorrect: false },
            { text: 'c. parenthesis', isCorrect: true },
            { text: 'd. square brackets', isCorrect: false },
        ]
    },
    {
        quest: 'A very useful tool used during development and debugging for printing content to the debugger is: ________.',
        ans: [
            { text: 'a. JavaScript', isCorrect: false },
            { text: 'b. terminal/bash', isCorrect: false },
            { text: 'c. for loops', isCorrect: false },
            { text: 'd. console.log', isCorrect: true },
        ]
    },
    {
        quest: 'Which HTML element do you link the JavaScript sheet in?',
        ans: [
            { text: 'a. <js>', isCorrect: false },
            { text: 'b. <scripting>', isCorrect: false },
            { text: 'c. <javascript>', isCorrect: false },
            { text: 'd. <script>', isCorrect: true },
        ]
    },
    {
        quest: 'How do you write "Hello World" in an alert box?',
        ans: [
            { text: 'a. msgBox("Hello World")', isCorrect: false },
            { text: 'b. alert("Hello World")', isCorrect: true },
            { text: 'c. msg("Hello World")', isCorrect: false },
            { text: 'd. alertBox("Hello World")', isCorrect: false },
        ]
    },
    {
        quest: 'How do you add a single-line comment in JavaScript?',
        ans: [
            { text: 'a. <!This is a comment-->', isCorrect: false },
            { text: 'b. */This is a comment*/', isCorrect: false },
            { text: 'c. //This is a comment', isCorrect: true },
            { text: 'd. "This is a comment', isCorrect: false },
        ]
    },
    {
        quest: 'How do you insert a comment that has more than one line in JavaScript?',
        ans: [
            { text: 'a. <!This comment has more than one line-->', isCorrect: false },
            { text: 'b. */This comment has more than one line*/', isCorrect: true },
            { text: 'c. //This comment has more than one line//', isCorrect: false },
            { text: 'd. None of the above', isCorrect: false },
        ]
    },
    {
        quest: 'Which event occurs when the user clicks on a HTML element?',
        ans: [
            { text: 'a. onclick', isCorrect: true },
            { text: 'b. onmouseclick', isCorrect: false },
            { text: 'c. onmouseover', isCorrect: false },
            { text: 'd. onchange', isCorrect: false },
        ]
    },
]


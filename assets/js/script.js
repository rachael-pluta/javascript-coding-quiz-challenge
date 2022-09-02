var startButton = document.getElementById('start-quiz')

var randomisedQuestions, currentQuestion

startButton.addEventListener('click', startQuiz)

/*
// Sets the questions and answers to the quiz
var questions = [ 
    {
    q: "Arrays in JavaScript can be used to store: _________.",
    a: [
        {text: "a. numbers and strings", isCorrect = false},
        {text: "b. other arrays", isCorrect = false},
        {text: "c. booleans", isCorrect = false},
        {text: "d. all of the above", isCorrect = true}
    ]
},
{
    q: "String values must be enclosed within ______ when being assigned to variables.",
    a: [
        {text: "a. commas", isCorrect = false},
        {text: "b. curly brackets", isCorrect = false},
        {text: "c. quotes", isCorrect = true},
        {text: "d. parenthesis", isCorrect = false},
    ]
},
{
    q: "Commonly used data types do NOT include: ___________.",
    a: [
        {text: "a. strings", isCorrect = false},
        {text: "b. booleans", isCorrect = false},
        {text: "c. alerts", isCorrect = true},
        {text: "d. numbers", isCorrect = false},
]
},
{
    q: "The condition in an if / else statement is enclosed with: _________.",
    a: [
        {text: "a. quotes", isCorrect = },
        {text: "b. curly brackets", isCorrect = },
        {text: "c. parenthesis", isCorrect = },
        {text: "d. square brackets", isCorrect = },
]
},
{
    q: "A very useful tool used during development and debugging for printing content to the debugger is: ________.",
    a: [
        {text: "a. JavaScript", isCorrect = false},
        {text: "b. terminal/bash", isCorrect = false},
        {text: "c. for loops", isCorrect = false},
        {text: "d. console.log", isCorrect = true},
]
}
]

*/

function startQuiz() {
    console.log('Started Quiz')
    randomisedQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    // include element hiding start button here
    // include element displaying question container here
    setQuestion()
}

function setQuestion() {
    displayQuestion(randomisedQuestions[currentQuestion])
}

function displayQuestion(question){
    
}

function displayAnswer() {

}
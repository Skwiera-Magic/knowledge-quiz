// DOM elements
let log = console.log.bind(document)
let quizBox = document.querySelector(".wrapper");
let startScreen = document.getElementById("start-screen")
let answers = document.getElementById("choices")
let endScreen = document.getElementById("end-screen")
let questionsScreen = document.getElementById("questions")
let questionTitle = document.getElementById("question-title")

// variables
var questionNumber = 0;
let questions = [
    { question: "who", answers: ["1a", "2a", "3a", "4a"], correctAnswer: 2 },
    { question: "why", answers: ["1b", "2b", "3b", "4b"], correctAnswer: 2 },
    { question: "where", answers: ["1c", "2c", "3c", "4c"], correctAnswer: 2 },
    { question: "when", answers: ["1d", "2d", "3d", "4d"], correctAnswer: 2 },
];
// event listener checking if 'start' button was clicked
quizBox.addEventListener("click", function (quizStart) {
    let element = quizStart.target;
    if (element.matches("#start")) {
        //changing classes so that start screen hides and questions show up
        startScreen.setAttribute("class", "hide")
        questionsScreen.setAttribute("class", "start")
        timer();
    }
})

//function that goes through 'questions' array and prints out question and answers
function renderQuestion() {
    questionTitle.innerHTML = ""
    answers.innerHTML = ""
    questionTitle.textContent = questions[questionNumber].question

    let createChoicesList = document.createElement("ol")

    answers.appendChild(createChoicesList)

    questions[questionNumber].answers.forEach(function (answer, index) {
        let listItem = document.createElement("li")
        listItem.textContent = answer
        listItem.setAttribute("class", "button")
        createChoicesList.appendChild(listItem)
        listItem.setAttribute("data-index", `${index}`)
    })


    answers.addEventListener("click", answerChecker)
    questionNumber++;
}

renderQuestion(); 

// function checking if correct answer was chosen
// TODO: let correctAudio = new Audio("./sfx")
var selectedAnswer = ""
var correctChoice = ""
correctChoice = questions[questionNumber].correctAnswer
function answerChecker(event) {
    let selectedAnswer = event.target.getAttribute("data-index")
    // 
    if (selectedAnswer == correctChoice) {
        log(selectedAnswer, correctChoice)
        log("correct")
    }
    else {
        log(selectedAnswer, correctChoice)
        log("incorrect")
    }
    if (questionNumber == questions.length) {
        questionsScreen.setAttribute("class", "hide")
        endScreen.setAttribute("class", "start")
    }
    else {
        renderQuestion();
    }
    return selectedAnswer, correctChoice
}
// function that sets up timer after quiz starts
let timerEl = document.getElementById('time')
function timer() {
    var timeLeft = 120;
    let timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft + " seconds"
        if (timeLeft >= 1) {
            timeLeft--;
            log(endScreen.getAttribute("class"))
        }
        else if (timeLeft === 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "Out of time"
        }
        if (endScreen.getAttribute("class") === "start") {
            clearInterval(timeInterval)
        }

    }, 1000)
}
log(endScreen.getAttribute("class"))

let finalScore = document.getElementById("final-score")
finalScore.textContent = "15"

let initials = document.getElementById("initials")
let submit = document.getElementById("submit")
let feedback = document.getElementById("feedback")
submit.addEventListener("click", function() {
    endScreen.setAttribute("class", "hide")
    feedback.setAttribute("class", "start")
    feedback.textContent = "Thank you for taking the quiz, check highscores to know how you placed"
    localStorage.setItem("initials", initials.value)
    localStorage.setItem("final-score", finalScore.textContent)
})


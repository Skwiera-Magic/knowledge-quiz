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
// todo: it's not working if I change correctAnswer to anything different
let questions = [
    {
        question: "If your PC is very hot and starts producing smoke, what do you do?",
        answers: ["Keep working, but try to complete task as soon as possible",
            "Get closest jug of water and pour it on the PC",
            "Save your progress, turn off and unplug the PC",
            "Open your window and try to blow the smoke away"],
        correctAnswer: 2
    },
    {
        question: "If there's something wrong with your car on the way to work, what do you do?",
        answers: ["Leave your car there and run to work, your boss will not tolerate another lateness",
            "Try to exit and enter the car, it's first thing you do with everything",
            "Get to the side of the road, turn on emergency lights, repair fault/call help",
            "Keep going, you can get new car but only if you have a job"],
        correctAnswer: 2
    },
    {
        question: "If your lightsaber was just chopped in half by industrial blade and there's couple droids running after you, what do you do?",
        answers: ["Raise your hands and fake surrender, try to mesmerize your enemies", 
            "Start crying as it was your favourite lightsaber, last gift from your master", 
            "Use the force to fling one of the droids at rest of them and run away, blend into closes crowd", 
            "When looking at pieces of your weapon trip on some rubble, fall down and end up just the same as lightsaber"],
        correctAnswer: 2
    },
    {
        question: "If your nephew who lives in a storage under stairs receives a letter from exclusive boarding school, delivered by an owl what do you do?",
        answers: ["Give the letter to your nephew, it has his name on the front",
            "Secretly organize party where you can tell him about letter",
            "Throw letter away, deny it's existence and promise to yourself that you'll do the same if next will come",
            "Help your nephew pack his things and wish him good luck"],
        correctAnswer: 2
    },
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
let correctAudio = document.getElementById("correct-audio")
let incorrectAudio = document.getElementById("incorrect-audio")
var selectedAnswer = ""
var correctChoice = ""
correctChoice = questions[questionNumber].correctAnswer
function answerChecker(event) {
    let selectedAnswer = event.target.getAttribute("data-index")
    // 
    if (selectedAnswer == correctChoice) {
        // todo: correctAudio.play();
    }
    else {
        // todo: incorrectAudio.play();
        penalty();
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
var timerEl = document.getElementById('time')
var score = ""
var timeLeft = ""
function timer() {
    var timeLeft = 90;
    let timeInterval = setInterval(function () {
        // function that makes timer change 
        if (timeLeft > 0) {
            timeLeft--;
        }
        else if (timeLeft === 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "Out of time"
            score = -1
            return score, renderEndScreen()
        }
        if (endScreen.getAttribute("class") === "start") {
            clearInterval(timeInterval)
            score = timeLeft
            return score, renderEndScreen()
        }
        timerEl.textContent = timeLeft + " seconds"
        // todo: set up penalty for wrong answer
    }, 1000)
    return timeLeft
}

function penalty() {
    timeLeft--;
    timeLeft--;
    timeLeft--;
    timeLeft--;
    timeLeft--;
    timeLeft--;
    timeLeft--;
    timeLeft--;
    timeLeft--;
    timeLeft--;
    log("penalty added")
}

// function that shows time left as final score
function renderEndScreen() {
    let finalScore = document.getElementById("final-score")
    finalScore.textContent = score + 1
}

// todo: make it work on pressing enter button
// function to render end screen after submitting the score
let initials = document.getElementById("initials")
let submit = document.getElementById("submit")
let feedback = document.getElementById("feedback")
submit.addEventListener("click", function () {
    endScreen.setAttribute("class", "hide")
    feedback.setAttribute("class", "start")
    feedback.textContent = "Thank you for taking the quiz, check highscores to know how you placed"
    localStorage.setItem("initials", initials.value)
    localStorage.setItem("final-score", score)
})

initials.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        submit.click();
    }
});


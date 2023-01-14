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

    }
})
function renderQuestion() {
    questionTitle.innerHTML = ""
    answers.innerHTML = ""
    questionTitle.textContent = questions[questionNumber].question

    let createChoicesList = document.createElement("ol")
    //log(createChoicesList)

    answers.appendChild(createChoicesList)

    questions[questionNumber].answers.forEach(function (answer, index) {
        let listItem = document.createElement("li")
        listItem.textContent = answer
        listItem.setAttribute("class", "button")
        createChoicesList.appendChild(listItem)
        listItem.setAttribute("data-index", `${index}`)
        //log(answer)
    })


    //log(questions[questionNumber].answers)
    //log(questions[questionNumber].question)
    //log(questionNumber)

    answers.addEventListener("click", answerChecker)
    questionNumber++;
}
renderQuestion();
var correctAnswer = ""
function answerChecker(event) {
    let selectedAnswer = event.target.getAttribute("data-index")
    log(selectedAnswer)
    correctAnswer = questions[questionNumber].correctAnswer
    log(correctAnswer)
    if (selectedAnswer === correctAnswer) {
        log("correct")
    }
    else if (selectedAnswer !== correctAnswer) {
        log("incorrect")
    }
    if (questionNumber == questions.length) {
        questionsScreen.setAttribute("class", "hide")
        endScreen.setAttribute("class", "start")
    }
    else {
        renderQuestion();
    }
    //log(questionNumber)
    //log(event.target.getAttribute("data-index"))
}



// questionTitle.addEventListener("click", function (nextQuestion) {
//     let answerSelected = nextQuestion.target;
//     if (answerSelected.matches("#question-title"))
//         questionsScreen.setAttribute("class", "hide")
//     endScreen.setAttribute("class", "start")
//     log(questionNumber)
// })  
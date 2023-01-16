let log = console.log.bind(document)
let highscores = document.getElementById("highscores")
let scores = JSON.parse(localStorage.getItem("highscore-list")) || []
//function to render highscores 
function renderList() {
for (let i = 0; i < scores.length; i++) {
    let renderHighscore = document.createElement("li")
    renderHighscore.textContent =  scores[i].initials + " " + scores[i].finalScore
    highscores.appendChild(renderHighscore)
}}
renderList();

// function to clear highscores after clicking 'clear highscores'
let clearHighscores = document.getElementById("clear")
clearHighscores.addEventListener("click", function() {
    localStorage.clear()
    window.location.reload();
})
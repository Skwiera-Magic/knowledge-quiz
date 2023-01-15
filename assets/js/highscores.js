let log = console.log.bind(document)
let highscores = document.getElementById("highscores")

// todo: 
//function to render highscores 
function renderList() {
    highscores.innerHTML = ""
    let renderHighscore = document.createElement("li")
    highscores.appendChild(renderHighscore)
    renderHighscore.textContent = localStorage.getItem("initials") + ": " + localStorage.getItem("final-score")  
}
renderList();

// function to clear highscores after clicking 'clear highscores'
let clearHighscores = document.getElementById("clear")
clearHighscores.addEventListener("click", function() {
    localStorage.clear()
    renderList();
})
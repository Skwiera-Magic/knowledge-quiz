let log = console.log.bind(document)
let highscores = document.getElementById("highscores")


function renderList() {

    highscores.innerHTML = ""
    let renderHighscore = document.createElement("li")
    highscores.appendChild(renderHighscore)
    renderHighscore.textContent = localStorage.getItem("initials") + ": " + localStorage.getItem("final-score")
   
}

renderList();
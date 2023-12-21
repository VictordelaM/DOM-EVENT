const choice = document.querySelector("#choice")
const output = document.querySelector("#output")
choice.addEventListener("change", (event) =>{
    output.innerHTML = `Sie haben ausgewählt: ${event.target.value}`})
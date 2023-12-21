let anzahl = 0 
let clickMe = document.getElementById("clickMe")
clickMe.addEventListener("click", () => {
    anzahl += 1
    if(anzahl < 20){
        clickMe.innerHTML = `Click me: ${anzahl}`
    }else {
        clickMe.innerHTML = `chill ma`
        anzahl = 0}})
let body = document.querySelector("body")
let grey = document.getElementById("grauTaste")
let white = document.getElementById("weissTaste")
let blue = document.getElementById("blauTaste")
let yellow = document.getElementById("gelbTaste")

grey.addEventListener("click", () => {
    body.style.backgroundColor = "grey"})
white.addEventListener("click", () => {
    body.style.backgroundColor = "white"})
blue.addEventListener("click", () => {
    body.style.backgroundColor = "blue"})
yellow.addEventListener("click", () => {
    body.style.backgroundColor = "yellow"})
const boxList = document.getElementsByClassName("card");
const changeColor = () => {Array.from(boxList)[Array.from(boxList).indexOf(event.target)].style.backgroundColor = "black"}
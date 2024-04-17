const switch_btn = document.querySelector("#switch");
const body = document.querySelector("body");
const changeable = document.getElementsByClassName("student-teacher");
const container = document.getElementsByClassName("container")[0];
const highlighter = document.getElementsByClassName("highlighter")[0];


switch_btn.addEventListener("click", () => {
    for (let i = 0; i < changeable.length; i++){
        changeable[i].innerHTML = changeable[i].innerHTML === "Student"? "Teacher": "Student";
    }

    body.classList.toggle("reversed");
});
var timeoutID;

function randomNum() {
    return (Math.floor(Math.random() * 8)) + 1;
}

function setTarget() {
    let divs = document.getElementsByTagName("div");
    for (let i = 0; i < divs.length; i++) {
        divs[i].classList = "";
    }
    document.getElementById(randomNum()).classList.add("target");
}

function main() {
    setTarget();
    timeoutID = setTimeout(function() {
        setTarget();
        main();
    }, 3000);
}

function click(e) {
    console.log(e.target.classList);
    if (e.target.classList == "target") {
        alert("Has ganado");
        e.target.classList = "";
        clearTimeout(timeoutID);
    }
}

main();
window.onclick = e => click(e);
console.log('ASSALAM O ALIKUM')
let turn = "X";
// FUNCTION TO CHSNGE THE TURN 

let gameover = false;
const changeturn = () => {
    return turn === "X" ? "0" : "X";
}
//FUNCTION CHECK FOR A WIN 
const checkkwin = () => {
    let boxtextt = document.getElementsByClassName('boxtextt')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtextt[e[0]].innerText === boxtextt[e[1]].innerText) && (boxtextt[e[2]].innerText === boxtextt[e[1]].innerText) && (boxtextt[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtextt[e[0]].innerText + "WON"
        }
        gameover = true;
    })
}

// GAME LOGIC
let boxes = document.getElementsByClassName("boxx");
Array.from(boxes).forEach(element => {
    let boxtextt = element.querySelector('.boxtextt');
    element.addEventListener('click', () => {
        if (boxtextt.innerText === '') {
            boxtextt.innerText = turn;
            turn = changeturn();
            checkkwin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
            }
        }
    })
})
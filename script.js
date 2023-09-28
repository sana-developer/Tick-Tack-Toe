let music = new Audio("music.mp3")
let ting = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let turn = "X"
let gameover = false
//function to change turn
const changeTurn=()=>{
    return turn === "X"? "0" : "X";
    
}
//function to change for a win
const checkWin=()=>{
    let boxtext = document.getElementsByClassName("boxtext")
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,48],
        [2,4,6,5,15,134]
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            gameOver.play();
            document.querySelector(".imagebox").getElementsByTagName('img')[0].style.width = "22vw"
            gameover = true;
            document.querySelector(".line").style.height = "3px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    });
}
//game logic
//music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText == ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
            }
        }
    })
})

//add onclick listner to reset button
reset.addEventListener('click',()=>{
    let textboxs = document.querySelectorAll('.boxtext')
    Array.from(textboxs).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    gameover = false;
    document.querySelector(".line").style.height = "0";
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
    document.querySelector(".imagebox").getElementsByTagName('img')[0].style.width = "0"
})
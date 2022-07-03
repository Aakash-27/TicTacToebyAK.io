console.log("Welcome to Tic Tac Toe")

// let music = new Audio("/Media/music.mp3")
// let gameover = new Audio("/Media/gameover.mp3")
let turn = new Audio("ting.mp3")

let trn = "X"
let gameovr = false;
const changeTurn = ()=>{
    return trn ==="X"?"0": "X"
}


const checkwin =()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2,5,4.5,0],
        [3,4,5,5,14.5,0],
        [6,7,8,,5,24.5,0],
        [0,3,6,-5,14.5,90],
        [1,4,7,5,14.5,90],
        [2,5,8,15,14.5,90],
        [0,4,8,5,14.5,45],
        [2,4,6,5,14.5,135]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !== ""){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameovr = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "110px"

            document.querySelector('.line').style.width = "20vw"

            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }

    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = trn;
            trn = changeTurn();
            turn.play();
            checkwin();
            if(!gameovr){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+trn;
            }
        }
    })
})


reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText=""
    });
    trn = "X"
    gameovr = false
    document.getElementsByClassName("info")[0].innerText = "Turn for "+trn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector('.line').style.width = "0vw"
})
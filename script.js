
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContianer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; //player X Player Y
const winPattrens = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO === true){
            box.innerText = "O";
            box.classList.add("red");
            turnO = false
        }else{
            box.classList.remove("red");
            box.innerText = "X";
            turnO = true
        };
        box.disabled = true;
        checkWinner()
    });
});
const disabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    };
};
const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContianer.classList.remove("hide");
    disabledBoxes()
};
const checkWinner = ()=>{
    for(let pattren of winPattrens){
    let pos1Val = boxes[pattren[0]].innerText;
    let pos2Val = boxes[pattren[1]].innerText;
    let pos3Val = boxes[pattren[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val !="") {
        if (pos1Val == pos2Val && pos2Val == pos3Val) {
            console.log("winner", pos1Val);
            showWinner(pos1Val);
        };
    };
};
};
const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContianer.classList.add("hide")
};
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
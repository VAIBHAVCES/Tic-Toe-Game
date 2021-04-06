const cells = document.querySelectorAll('.items');
let xturn ;
let currentClass ;
const gameover = document.querySelector('.gameover');
const board = document.querySelector('#board');
const winnCombs=[ [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

startGame();
function startGame(){
    
    xturn = true;
    swapTurns();
    board.classList.add(currentClass);

    for(let boxes of cells ){
        boxes.addEventListener('click' , handleClick ,{once:true});
    }
    document.querySelector('.gameover button').addEventListener('click' , ()=>{
        window.location.reload();
    });
    
}

function handleClick(e){
    
    board.classList.remove('x');
    board.classList.remove('o');
    
    e.target.classList.add(currentClass);
    // console.log("clicking : "+currentClass);
    if(checkWinner()){
        endGame()     
    }

    checkDraw();
    swapTurns();
    e.target.parentNode.classList.add(currentClass);
    
}
function checkDraw(){
    let local  =0 ;
    console.log("draw : "+cells[0].classList.length );
    for(let items of cells){
        if(items.classList.length > 1) local++;
    }
    if(local==9){
        document.querySelector('#winmessage').textContent=`It's a draw try again`;
        gameover.classList.add('show');
    }
}
function endGame(){
    document.querySelector('#winmessage').textContent=`${currentClass} is winner`;
    gameover.classList.add('show');
}

function checkWinner(){
    let resp=false;
    for(let combs of winnCombs){
        let count = 0 ;
        for(let i of combs){
            
            if(cells[i-1].classList.contains(currentClass)){
                count++;
            }
        }
        if(count==3 )  return true ;

    }
    return false;


}
function swapTurns(){
    xturn = !xturn;
    if(xturn)
        currentClass ='x';
    else 
        currentClass ='o';
}
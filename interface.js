document.addEventListener('DOMContentLoaded', ()=>{
    let squares = document.querySelectorAll(".piece");
    squares.forEach((piece) =>{
        piece.addEventListener('click', handleClick)
    })
})

function handleClick(event){
    //console.log(event.target)
    let piece = event.target;
    let position = piece.id;
    //console.log(position)
    if(handleMove(position)){
        setTimeout(()=>{
            alert(" O Jogo Acabou!!")
        }, 100)
    }

    updateSquares()


}

function updateSquares(){
    let squares = document.querySelectorAll(".piece");
    squares.forEach((piece) =>{
        let position = piece.id;
        let symbol = board[position]
        if(symbol != ''){
            piece.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}

function resetGame(){
    let resetButton = document.getElementById("reset");
    resetButton.onclick = ()=> document.location.reload();
}

resetGame()

/*
function checkWinner(){
    let vencedor = document.querySelectorAll('#vencedor');
    if(
        seq[0].value == 
    )
}

https://github.com/Ryan-012/Jogo-da-Velha/blob/main/js/script.js
*/


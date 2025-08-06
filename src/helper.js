export const isWinner = (gameBoard, currentMove, currentPlayer)=>{
    let board = [...gameBoard];
    board[currentMove] = currentPlayer;


    const WinLine = [

    [0,1, 2, 3],
    [4,5, 6, 7],
    [8, 9,10,11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5,9,13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [1, 5, 10, 16],
    [3, 6, 9, 12],
    ];

    for (let i =0 ; i<WinLine.length; i++){
        const [c1, c2, c3, c4] = WinLine[i];

        if (gameBoard[c1] >0 &&
            gameBoard[c1] === gameBoard[c2] &&
            gameBoard[c2] === gameBoard[c3] &&
            gameBoard[c3] === gameBoard[c4] 

        )
        {return true;}

    }
    return false;

}

export const getCompMove = (gameBoard)=>
{
    let validMOves =[];
    for (let i=0; i< gameBoard.length; i++){
       if (gameBoard[i]=== 0){
         validMOves.push(i);}
    
}
let rndMove =Math.floor(Math.random()* validMOves.length);
return validMOves[rndMove];
}
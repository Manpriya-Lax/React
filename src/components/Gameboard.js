import React, {useEffect, useState} from "react";

import'./Game.css';
import Gamecircule from "./Gamecircule";
import Header from "./Header";
import Footer from "./footer";
import { isWinner, getCompMove } from "../helper";
import { 
    no_circules,
    No_plyr ,
    plyr1 ,
    plyr2,

    game_state_playing ,
    game_state_win,
} from "./const";







const GameBoard=()=>{
    const [gameBoard, setGameBoard]=useState(Array(16).fill(No_plyr));
    const [currentPlyr, setCurrentplyr ]= useState(plyr1);
    const [gameState, setGameState] = useState(game_state_playing);


    console.log(gameBoard);

    useEffect(()=>{
        inItGame();
    },[]);

    const inItGame= ()=>
{
    setGameBoard(Array(16).fill(No_plyr));
    setCurrentplyr(plyr1);
    setGameState(game_state_playing);


}


    const initBoard= () =>{
        const circles =[];


        for(let i=0; i<no_circules; i++){
          circles.push(renderCircle(i));  

        }
                    return circles;

    }

    const suggestMove =()=>{
                    console.log('is winner');

        circleClicked(getCompMove(gameBoard));

    }
    const renderCircle =id =>
    {
        return <Gamecircule key={id} id={id} className={`player${gameBoard[id]}`} onCircleClicked={circleClicked}/>
    }

    const circleClicked = (id) =>{

    if (gameBoard[id]!== No_plyr) return;    
    if (gameState!== game_state_playing)  return;    
    
        

        setGameBoard(prev => {

            return prev.map((circle,pos) => {
                if (pos === id) return currentPlyr;
                return circle;
            })
        } )
        

        


        setCurrentplyr(currentPlyr === plyr1 ? plyr2 : plyr1);

            console.log(gameBoard);

            if (isWinner (gameBoard, id, currentPlyr)){
                setGameState (game_state_win); 
            console.log('is winner');

        }

console.log('circle clicked:'+ id);
        
    }
    
    
    return(
        <>
        <Header gameState={gameState} player={currentPlyr} />
        <div className="gameBoard">
        
        {initBoard()}

         </div>
        <Footer onClickEvent={inItGame} onSuggestClick={suggestMove} />
    </>
    );
    
}
export default GameBoard;
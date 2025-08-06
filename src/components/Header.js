import React from "react";
import'./Game.css';
import { 
 

    game_state_playing ,
    game_state_win,
} from "./const";


const Header = ({gameState, player})=>
{
    const RenderLable =()=> {
        switch (gameState){
            case game_state_playing:
                return<div> Player {player} Turn</div>
            case game_state_win:
                return<div> Player {player} won</div>

            default:
        }
    }


    return (
        <div className="panel header"> 
            <div className="headertext"> {RenderLable()}</div>
        </div>
    );
};
export default Header;
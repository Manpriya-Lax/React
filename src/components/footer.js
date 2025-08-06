import React from "react";
import'./Game.css';


const Footer = ({onClickEvent,onSuggestClick})=>
{
    return (
        <div className="footer"> 
        <button onClick={onClickEvent}>New game </button>
        <button onClick={onSuggestClick}>Suggest </button>

            </div>
    );
};
export default Footer;
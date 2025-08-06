import React from "react";
import'./Game.css';



const Gamecircule =({id,children,className,onCircleClicked})=>{
  

    return(
        <div className={`gameCircule ${className}`} onClick={() =>onCircleClicked( id)}> 
            {children}
        </div>
    )
}
export default Gamecircule; 
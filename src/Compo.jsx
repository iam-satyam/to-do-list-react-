import React from "react";
import 'font-awesome/css/font-awesome.min.css';


const Compo=(prop)=>{
    
    return (<>
        <div className="task">
        
        <li><button className="glow-on-hover cross" onClick={()=>{
            prop.onSelect(prop.id);
        }}>&#10006;</button>{prop.txt} </li>
        <li> <button className="glow-on-hover cross" onClick={()=>{
            prop.oney(prop.id);}}>&#x270D;&#x1F3FB; </button></li>
        </div>
    </>)
}
export default Compo;
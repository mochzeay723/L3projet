import React from "react";
import { BiHomeSmile } from "react-icons/bi";
import './headstyle.css'
function Headtag(){
 return(
   <div className="head">
     <BiHomeSmile id="icon" fontSize={25}></BiHomeSmile>
     <button id="btn1">emploi du temp</button>
   </div>
 );
}
export default Headtag ;
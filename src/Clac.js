import React, { useState } from "react";

import './Style.css'

export default function Clac() {


  const [data, setData] = useState("");

  const clacBtn = [];

  const handleClick = (event) => {
    setData(data+event.target.value);
  };
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "%"].forEach( item => {
    
    
    clacBtn.push(

      <button
        onClick={(e) => { setData(data + e.target.value); }}
        value = { item } key = {item} >  {item} </button>
    )
  
});

  return < >

<div className= "wrapper">

    <div className="show-input"> {data}</div>
    <div className="digits flex ">{clacBtn}</div>
    <div className="modifiers subgrid" >
        <button onClick={ () => setData(data.substr(0, data.length - 1))} > Clear </button>
        <button onClick={()=> setData("")}> Ac </button>
    </div>
     

    <div className="operations subgird"> 

<button value="+" onClick={handleClick}> + </button>

<button value="-" onClick={handleClick}> - </button>

<button value="*" onClick={handleClick}> * </button>

<button value="/" onClick={e => setData(data + e.target.value)}> / </button>

<button
onClick={e => { 
    try{
    

               
        setData(String(eval(data)).length > 3 && 
            String(eval(data)).includes(".")
            ? String(eval(data).toFixed(4))
            : String(eval(data)));
        
    }
    catch(err){
        console.log(err);
    }


}}

value="="
> =</button>




</div>
</div>

  </>;


}

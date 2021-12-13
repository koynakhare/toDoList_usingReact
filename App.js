import Classes from './App.module.css';
import React, { useState } from 'react';
import Listofitem from './Listofitem';
const App=()=>{
  const[inputstate,setinput]=useState("");
  const[item,setinput1]=useState([]);
 const changeinput=(event)=>{
let input=event.target.value;
setinput(input);
 };
 const onSubmit=()=>{
   setinput1((oldval)=>{
       return [...oldval,inputstate]
   });
   setinput("");
   
 };
 const deleteitem=(id)=>{
setinput1((olditem)=>{
  return olditem.filter((arrele,index)=>{
    return index!==id;
  })
})
 }
    return(
        <>
        
        <div className={Classes.main}>
            <div className={Classes.main1}>
                <h1>To Do List</h1>
                
                <input type="text" placeholder='Add item' value={inputstate} onChange={changeinput} />
                
                <button onClick={onSubmit}>+</button>
                <ul>
                {item.map((itemval,index)=>{
                    return <Listofitem key={index} id={index}text={itemval} onselect={deleteitem}/>;
                    })}
                </ul>
            </div>
            
        </div>
        
        </>
    )
    
 }
 export default App;
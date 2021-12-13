import React from 'react';
import App from './App';
import Classes from './App.module.css';
const Listofitem=(props)=>{
    const deleteitem=()=>{
        console.log("delete");
    };
    return(<> 
    <div className={Classes.cross}>
    <i className="fa fa-times" aria-hidden="true" onClick={()=>{
        props.onselect(props.id)
    }}/>
    <li>{props.text}</li>
    </div>
    </>
    
    )
            
}
export default Listofitem;
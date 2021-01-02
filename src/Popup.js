import React , {useState} from 'react';
import './style.css';

export default function Popup(props){
    const closeit = () => {
      props.toggle();
    }
    return (
      <div className = 'pop'>
           <div className = 'pop-content'>
                   I'M A popup
               <span onClick = {()=>closeit()}>DEL</span>
            </div>
      </div>
    );
}
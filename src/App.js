import React, {useState} from "react";
import "./style.css";

export default function App() {
  const [str,setStr] = useState('');
  const [result,setResult] = useState([]);
  const [pop,setPop] = useState(false);
  //c6ebXltp0E4xCYL08zURxJce-Yuhw0kEwGdFVyNxCLA

  const fetchImages = () =>{
    fetch(`https://api.unsplash.com/search/photos/?client_id=c6ebXltp0E4xCYL08zURxJce-Yuhw0kEwGdFVyNxCLA&query=${str}&orientation=squarish&page=3&per_page=30`)
    .then(res=>res.json())
    .then(data=>{
      setResult(data.results)
    })
  }

  const handleClick = () => {
    
  }
  return (
    <div className  = 'app'>
      <nav className = 'navbar'>
          <input type = 'text' 
                 value = {str} 
                 placeholder = 'what do you like'
                 onChange = {(e)=> setStr(e.target.value)}/>
          <button onClick = {()=> fetchImages()}> GO </button>
      </nav>
      <div className = 'gallery' > 
          {
            result.map(item => {
              return <div><img key = {item.id} 
                          className= 'image' 
                          src = {item.urls.regular}
                          onClick = {()=>handleClick()}/>
                          
                    </div>
            })
          }
      </div>
    </div>
  );
}

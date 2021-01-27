import React , {useState,useEffect} from 'react'

export default function Gallery(){
   const [results,setResults] = useState([]);
   const [search, setSearch] = useState('');
   const [isSubmitted , setIsSubmitted] = useState(null);

   const fetchImages = () =>{
    fetch(`https://api.unsplash.com/search/photos/?client_id=c6ebXltp0E4xCYL08zURxJce-Yuhw0kEwGdFVyNxCLA&query=${search}&orientation=portrait&page=1&per_page=30`)
    .then(res=>res.json())
    .then(data=>{
      setResults(data.results)
    })
  }

  useEffect(() => {
    if(!isSubmitted){
      return ;
    }
    fetchImages();
  },[isSubmitted,search]);


  const handleClick =(str)=>{
      setSearch(str);
    }
  
  const handleGo = () =>{
    if(search){
      setIsSubmitted(true);
    }
    else{
      console.log('please enter something');
    }
  }

  return(
    <div className = 'cont'>
       <div className  = 'app'>
          <nav className = 'navbar'>
            <input type = 'text' 
                 value = {search} 
                 placeholder = 'what do you like'
                 onChange = {(e)=> {setIsSubmitted(false);setSearch(e.target.value)}}/>
            <button className = 'go' onClick = {()=> handleGo()}> GO </button>
          
            <button className = 'hills' onClick = {()=>handleClick('hills')}>HILLS</button>
            <button className = 'beach' onClick = {()=>handleClick('beach')}>BEACH</button>
          
         </nav>
      
    </div>
        <div className = 'gallery' > 
          {
            results.map(item => {
              return <div><div><img key = {item.id} 
                          className= 'image' 
                          src = {item.urls.regular}
                          /></div>
                     </div>
            })
          }
      </div>
      </div>)
}
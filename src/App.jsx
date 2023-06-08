import React ,{useState} from 'react';
import  './App.css';
import Compo from './Compo.jsx';

const App=()=>{
  const [inputList,setInputList]=useState('');
  const[item,setItem]=useState([]);


  const itemEvent=(event)=>{
    setInputList(event.target.value);

  }
  const show=()=>{
    setItem((prev)=>{
      return [...prev,inputList];
          

    });
    setInputList(" ");
  }
const deleteitems=(id)=>{

  setItem((prev)=>{
    return prev.filter((arr,idx)=>{
      return idx!==id;
    })

  })
   
}

const update=(id,txt)=>{
 console.log(txt);
  
  setItem((prev)=>{
    return prev.filter((arr,idx)=>{
      return idx!==id;
    })


  })



}


  return(
    <div className="main
    -div">
      <div className="center_div">
      <br/>
      <h1 className="head">TO DO LIST(CRUD)</h1>
      <br/>
      <input type="text" placeholder="ADD YOUR WISH" className="ipo"  value={inputList} onChange={itemEvent}/>
      <button className="glow-on-hover plus" onClick={show}>+</button>
      <ul>
       {
        item.map((val,idx)=>{
          return (<Compo  
          key={idx}
          id={idx}
          txt={val} 
            onSelect={deleteitems}
            oney={update}
          />);
          
        })
      } 
</ul>

      </div>
    </div>

  );
}







export default App;
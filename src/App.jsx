import './App.css';
import Axios from "axios";
import {  useState } from "react";

function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState("");

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then(
      (res) => {
        setGeneratedExcuse(res.data[0].excuse);
      }
    );
  };

  return (<>
        <h1> Generate An Excuse </h1>

    <div className="App">
      
      <button  onClick={() => fetchExcuse("office")}> Office </button>
    </div>
    <div className='App'>
      <button  onClick={() => fetchExcuse("family")}> Family</button>

    </div>
    <div className='App'>
    <button  onClick={() => fetchExcuse("party")}> Party</button>

    </div>
    <div className='App'>
    <button  onClick={() => fetchExcuse("funny")}> Funny</button>

    </div>
    
 
 <div className="excuse">
 <p> {generatedExcuse} </p>

 </div>
  </>
  );
}

export default App;
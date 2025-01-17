import './App.css';
import { useEffect, useState } from "react";
import randColor from './Functions/randColor';
import Kv from './Components/JamesBond/Kv';
//import Count from './Components/JamesBond/Count';
import ForeverYoung from './Components/JamesBond/FoverYoung';
function App() {

    const [kv, setKv] = useState([]);


    const kvPressed = () => {
        setKv(k => [...k, randColor()]);
        console.log('Ja ja 1')
    }

    useEffect(() => {
        if(kv.length === 0) {
            return;
        }
        console.log('Ja ja 2');
    }, [kv]);






    return (
      <div className="App">
        <header className="App-header">
          <h1 onClick={kvPressed}>State</h1>
            <div className='kv-bin'> 
            {
                kv.map((c, i) => <Kv key={i} c={c} i={i}></Kv>)
            }
            </div>
            <ForeverYoung></ForeverYoung>


          </header>
    </div>
  );
}

export default App;
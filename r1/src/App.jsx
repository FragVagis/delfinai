import './App.css';
import Kosmosas from './Components/005/Kosmosas';
import Kn from './Components/005/Kn';

const geltona = 'yellow';
const ms = {color: geltona, backgroundColor: 'skyblue'};
const mas = ['Pilkis', 'Murkis', 'Gagarinas'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zdarova maladoi!</h1>

        {
          mas.map((n, i) => <Kn key={i} name={n}></Kn>)
        }

        <Kosmosas spalva="pink" krastas="20"></Kosmosas>
        <Kosmosas spalva={geltona} krastas="70" manoStilius={ms}></Kosmosas>
      </header>
    </div>
  );
}

export default App;

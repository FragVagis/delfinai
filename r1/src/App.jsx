import './App.css';
import Kosmosas from './Components/005/Kosmosas';
import Kn from './Components/005/Kn';
import Labas from './Components/HomeWork/Labas';
import ZebrasIrBebras from './Components/HomeWork/ZebrasIrBebras';
import rand from './Functions/rand';
import TekstukaiRandom from './Components/HomeWork/TekstukaiRandom';
import Sabaka from './Components/HomeWork/Sabaka';
import SabakaApskritimas from './Components/HomeWork/SabakaApskritimas';
import SabakaApskritimas1 from './Components/HomeWork/SabakaApskritimas1';

const geltona = 'yellow';
const ms = {color: geltona, backgroundColor: 'skyblue'};
const tekstas = ['Props bet koks tekstas'];
const tekstas1 = ['Zebrai ir Bebrai'];
const mass = ['blue', 'red']
const tekst00 = ['Randominiai tekstukai']
const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dmitrij Safarevič</h1>

        {/*1 Uzduotis */}
        <Labas spalva="pink" ></Labas>
        {/*2 Uzduotis */}
        {
          tekstas.map((n, i) => <Kn key={i} name={n}></Kn>)
        }

        {/*3 Uzduotis Zebrai.jsx */}
        <ZebrasIrBebras pasis={tekstas1} spalva2={mass[rand(0,1)]}></ZebrasIrBebras>

        {/*4 ir 5 Uzduotis TekstukaiRandom.jsx */}
        <TekstukaiRandom tekst={tekst00} tekst1={tekst00} spalva="lime"></TekstukaiRandom>

        {/*REACT BASE LIST  1 Uzduotis:*/}
        {dogs.map((n, i) => <Sabaka key={i} kvadSab={n}></Sabaka>)}

        {/*REACT BASE LIST  2 Uzduotis:*/}
        {dogs.sort().map((n, i) => <SabakaApskritimas key={i} numeravimas={i+1} apskrSab={n}></SabakaApskritimas>)}

        {/*REACT BASE LIST  3 Uzduotis:*/}
        {dogs.sort().map((n, i) => <SabakaApskritimas1 key={i} numeravimas1={i+1} apskrSab1={n} numeravimas1kvad={i+1}></SabakaApskritimas1>)}











        <Kosmosas spalva="pink" krastas="20"></Kosmosas>
        <Kosmosas spalva={geltona} krastas="70" manoStilius={ms}></Kosmosas>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import FirstBlock from './components/FirstBlock/FirstBlock';
import SalesCircle from './components/SalesCircle/SalesCircle';
import Header from './components/Header/Header';
import SecondBlock from './components/SecondBlock/SecondBlock';
import ArrowNextCard from './components/ArrayNextCard/ArrowNextCard';
import ClothesCart from './components/ClothesCard/ClothesCard';
import ThirdBlock from './components/ThirdBlock/ThirdBlock';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstBlock />
      <img src="/assets/y2kLINE.svg" alt='y2ky2ky2k' className='y2kLine' />
      <SalesCircle size ="318px" speed="25s" className="firstCircle"></SalesCircle>
      <SecondBlock/>
      <SalesCircle size ="300px" speed="50s" direction="reverse" className="firstCircle"/>
      <h1>our production</h1>
      <ArrowNextCard/>
      <ClothesCart src="/assets/shirt3.svg" />
      <ThirdBlock />
    </div>
  );
}

export default App;

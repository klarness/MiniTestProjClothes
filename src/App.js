import './App.css';
import FirstBlock from './components/FirstBlock/FirstBlock';
import SalesCircle from './components/SalesCircle/SalesCircle';
import Header from './components/Header/Header';
import SecondBlock from './components/SecondBlock/SecondBlock';
import ArrowNextCard from './components/ArrayNextCard/ArrowNextCard';
import ClothesCart from './components/ClothesCard/ClothesCard';
import ThirdBlock from './components/ThirdBlock/ThirdBlock';
import FooterBlock from './components/FooterBlock/FooterBlock';

function App() {
  return (
    <div className="App">
      <div className="Blocks1">
        <Header />
        <FirstBlock />
      </div>
      <img src="/assets/y2kLINE.svg" alt='y2ky2ky2k' className='y2kLine' />
      <div className="Blocks2">
        <SecondBlock/>
        <h1>our production</h1>
        <ArrowNextCard/>
        <ClothesCart src="/assets/shirt3.svg" />
        <ThirdBlock />
      </div>
      <FooterBlock/>
    </div>
  );
}

export default App;

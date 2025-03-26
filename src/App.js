// App.js
import './App.css';
import FirstBlock from './components/FirstBlock/FirstBlock';
import Header from './components/Header/Header';
import SecondBlock from './components/SecondBlock/SecondBlock';
import ThirdBlock from './components/ThirdBlock/ThirdBlock';
import FooterBlock from './components/FooterBlock/FooterBlock';
import ProductSlider from './components/ProductSlider/ProductSlider';

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
        <ProductSlider />
        <ThirdBlock />
      </div>
      <FooterBlock/>
    </div>
  );
}

export default App;

import Navbar from './components/Navbar.js'
import './App.css';
import Home from './screens/Home.js';
import BrandGuide from './screens/BrandGuide.js';
import ToneOfVoice from './screens/ToneOfVoice.js';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <div classNameName="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}  ></Route>
          <Route exact path='/BrandGuidelines' element={<BrandGuide />} ></Route>
          <Route exact path='/ToneOfVoice' element={<ToneOfVoice />} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

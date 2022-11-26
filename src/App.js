import logo from './logo.svg';
import './App.css';

import Contacts from './routes/Contacts';
import Calculator from './routes/Calculator';
import Layout from './routes/Layout';
import NoPage from './routes/NoPage';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {  
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />          

          <BrowserRouter>
            <Routes className='link-routes'>
              <Route path='/' element={<Layout/>}></Route> 
              <Route index path='calculator' element={<Calculator/>}></Route>
              <Route index path='contact' element={<Contacts/>}></Route>
              <Route index path='*' element={<NoPage/>}></Route>        
            </Routes>
          </BrowserRouter>  

          <p className="App-link">
            Calculator React Project
          </p>

          
        </header>
      </div>
    </>     
  );
}

export default App;

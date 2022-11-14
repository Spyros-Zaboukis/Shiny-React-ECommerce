import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Index.jsx';
import Survey from './pages/Survey.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/index.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
    
      <Header/>

      <Routes> 
        <Route exact path="/" element={ <Home/> } />
        <Route path="Survey/:questionNumber" element={ <Survey/> } />
      </Routes>
      
    </BrowserRouter>
    </React.StrictMode>
);
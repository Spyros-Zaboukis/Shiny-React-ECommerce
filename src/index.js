import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Index.jsx';
import Survey from './pages/Survey/index.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/index.jsx';
import Error from './components/Error/index.jsx';
import Result from './pages/Result/index.jsx';
import Freelances from './pages/Freelances/index.jsx';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <BrowserRouter>
    <GlobalStyle/>
      <Header/>
        <Routes> 
          <Route path="/" element={ <Home/> } />
          <Route path="/Result" element={<Result/>} />
          <Route path="Survey/:questionNumber" element={ <Survey/> } />
          <Route path='/Freelances' element={<Freelances/>}/>
          <Route path="*" element={ <Error/> } />

        </Routes>
      
    </BrowserRouter>
    </React.StrictMode>
);



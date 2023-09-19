import React from 'react';
import Navbar from './components/layouts/Navbar';
import User from './components/layouts/users/User';
import Alert from './components/layouts/Alert';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import './App.css';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';


const  App = () => {
   
    return (  
      <GithubState>
        <AlertState>
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <div className='container'>
                <Alert/>
                <Routes>
                  <Route   exact path='/' element={<Home/> }/>
                  <Route exact path='/about' element={<About/>}/>
                  <Route exact path='/user/:ID' element={<User/>} />
                  <Route path='*' element={<NotFound/>}/>
                </Routes>
              </div>     
            </div>
          </BrowserRouter>
        </AlertState>
      </GithubState>
    );

  
  
}

export default App;

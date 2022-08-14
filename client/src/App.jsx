import React from 'react';
import './App.css'

import Navbar from './components/Navbar.jsx';
import Landing from './components/Landing.jsx';
import Footer from './components/Footer.jsx';
import Transactions from './components/Transactions.jsx';
import Contacts from './components/Contacts.jsx';
import SearchUsers from './components/SearchUsers.jsx';
import About from './components/About.jsx';


const App = () => {
  

  return (
    

    <div id='home' className='box'>
      <Navbar />
      <Landing />
      <Transactions />
      <Contacts />
      <SearchUsers />
      <About />
      
      
      
    </div>

   
  );
}

export default App;

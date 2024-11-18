import React, { useState } from 'react';
import Navbar from './Components/Navigation';
import Homepage from './Sites/Home';
import About from './Sites/About';
import Certification from './Sites/Certification';
import Portfolio from './Sites/Portfolio';
import './App.css';


function App() {
  const [page, setPage] = useState('home');

  let content;
  if (page === 'home') {
    content = <Homepage />;
  } else if (page === 'about') {
    content = <About />;
  } else if (page === 'certification') {
    content = <Certification />;
  } else if (page === 'portfolio') {
    content = <Portfolio />;
  }


  return (
    <div className="App">
      <Navbar setPage={setPage} />
      {content}
    </div>
  );

}

export default App;

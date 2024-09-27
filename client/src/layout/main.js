// src/App.js

import React from 'react';
import HomePage from '../pages/HomePage';
import NavBar from '../components/NavBar.js';
import SideBar from '../components/SideBar.js';

function App({children}) {
  return (
    <div>
      <NavBar />
      {children}
      <SideBar />
    </div>
  );
}

export default App;

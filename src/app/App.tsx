import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from '../views/main/main';
import { NavBar } from '../components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <MainPage></MainPage>
    </div>
  );
}

export default App;

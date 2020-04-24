import React from 'react';
import './App.css';
import BurgerMenu from './components/BurgerMenu'
import burger from './logo/burger.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={burger} alt="test logo" className="burger-logo" />
      </header>
      <body>
      <BurgerMenu/>
      </body>
    </div>
  );
}

export default App;

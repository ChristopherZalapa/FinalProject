import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import routes from './config/routes';
import './App.css';
// import EntryIndex from './pages/EntryIndex';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        { routes }
      </div>
    </Router>
  );
}

export default App;
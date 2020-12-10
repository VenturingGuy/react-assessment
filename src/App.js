import logo from './logo.svg';
import './App.css';
import Heading from './Heading.js';
import MetalMeta from './MetalMeta.js';
import BandList from './BandList.js';
import { HashRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Heading />
        <MetalMeta />
        <BandList />
      </div>
    </Router>
  );
}

export default App;

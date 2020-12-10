import logo from './logo.svg';
import './App.css';
import Heading from './Heading.js';
import MetalMeta from './MetalMeta.js';
import BandList from './BandList.js';

function App() {
  return (
    <div className="App">
      <Heading />
      <MetalMeta />
      <BandList />
    </div>
  );
}

export default App;

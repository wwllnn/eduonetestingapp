import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='container'>
        <Navbar />
        <Content />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

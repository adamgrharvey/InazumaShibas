import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import "./index.css";
import Home from './routes/Home';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='Nav-group'>
          <button className='button'>Home</button>
          <button className='button'>History</button>
          <button className='button'>Males</button>
          <button className='button'>Females</button>
          <button className='button'>Litters</button>
          <button className='button'>Handling</button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

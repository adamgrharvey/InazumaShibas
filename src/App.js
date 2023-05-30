import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <button className='button'>Home</button>
        <button className='button'>History</button>
        <button className='button'>Males</button>
        <button className='button'>Females</button>
        <button className='button'>Litters</button>
        <button className='button'>Handling</button>
      </div>
    </BrowserRouter>
  );
}

export default App;

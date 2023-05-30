import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import "./index.css";
import Home from './routes/Home';
import Dogs from './routes/Dogs';
import Achievements from './routes/Achievements';
import History from './routes/History';
import Puppies from './routes/Puppies';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='Nav-group'>
          <Link to={"/"}>
            <button className='button'>Home</button>
          </Link>
          <Link to={"/about-shibas"}>
            <button className='button'>About Shibas</button>
          </Link>
          <Link to={"/our-shibas"}>
            <button className='button'>Our Shibas</button>
          </Link>
          <Link to={"/puppies"}>
            <button className='button'>Puppies</button>
          </Link>
          <Link to={"/achievements"}>
            <button className='button'>Achievements</button>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-shibas" element={<Dogs />} />
          <Route path="/about-shibas" element={<History />} />
          <Route path="/puppies" element={<Puppies />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

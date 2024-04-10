import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import './index.css'
import Home from './routes/Home'
import Dogs from './routes/Dogs'
import Achievements from './routes/Achievements'
import History from './routes/History'
import Puppies from './routes/Puppies'
import ButtonRow from './components/ButtonRow'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Nav-group">
          <ButtonRow></ButtonRow>
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
  )
}

export default App

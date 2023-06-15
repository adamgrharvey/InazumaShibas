import { useEffect, useState } from 'react';
import '../App.css';
import "../index.css";
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

export default function ButtonRow(props) {

  // deprecated, but updates DOM on URL load, keeping in.
  const [selected, setSelected] = useState(0)

  return <>
    <Link to={"/"}>
      <button onClick={() => setSelected(0)} className={`button${window.location.pathname === '/' ? '-selected':''}`}>Home</button>
    </Link>
    <Link to={"/about-shibas"}>
      <button onClick={() => setSelected(1)} className={`button${window.location.pathname === '/about-shibas' ? '-selected':''}`}>About Shibas</button>
    </Link>
    <Link to={"/our-shibas"}>
      <button onClick={() => setSelected(2)} className={`button${window.location.pathname === '/our-shibas' ? '-selected':''}`}>Our Shibas</button>
    </Link>
    <Link to={"/puppies"}>
      <button onClick={() => setSelected(3)} className={`button${window.location.pathname === '/puppies' ? '-selected':''}`}>Puppies</button>
    </Link>
    <Link to={"/achievements"}>
      <button onClick={() => setSelected(4)} className={`button${window.location.pathname === '/achievements' ? '-selected':''}`}>Achievements</button>
    </Link>
  </>
}
import { useEffect, useState } from 'react';
import '../App.css';
import "../index.css";
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

export default function ButtonRow(props) {

  const [selected, setSelected] = useState(0)

  return <>
    <Link to={"/"}>
      <button onClick={() => setSelected(0)} className={`button${selected === 0 ? '-selected':''}`}>Home</button>
    </Link>
    <Link to={"/about-shibas"}>
      <button onClick={() => setSelected(1)} className={`button${selected === 1 ? '-selected':''}`}>About Shibas</button>
    </Link>
    <Link to={"/our-shibas"}>
      <button onClick={() => setSelected(2)} className={`button${selected === 2 ? '-selected':''}`}>Our Shibas</button>
    </Link>
    <Link to={"/puppies"}>
      <button onClick={() => setSelected(3)} className={`button${selected === 3 ? '-selected':''}`}>Puppies</button>
    </Link>
    <Link to={"/achievements"}>
      <button onClick={() => setSelected(4)} className={`button${selected === 4 ? '-selected':''}`}>Achievements</button>
    </Link>
  </>
}
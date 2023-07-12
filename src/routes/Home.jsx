import '../CSS/Home.css';
import { useState, useEffect } from 'react';
import ayaabout from "../images/aya-about-PhotoRoom.png-PhotoRoom.png";
import LightningBolt from '../components/LightningBolt';
export default function Home(props) {




  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Loading function to load data or 
    // fake it using setTimeout;
    const loadData = async () => {
      setCount(0);
      // Wait for two second
      const timer = setInterval(() => {
        setCount(prev => prev + 1);
      }, 45)

      await new Promise((r) => setTimeout(r, 222200));
      // Toggle loading state
      setIsLoading(false);
      clearInterval(timer);
    };

    loadData();
  }, [])

  if (isLoading) {
    return (
      <LightningBolt />
    )
  } else {

    return (
      <>
        <div className='Home fadeInPage'>
          <p><span className='move1 Title'>Inazuma </span><span className='move2 Title' >Shibas</span></p>
          <img className='HomePhoto' src={ayaabout}></img>
          
        </div>
      </>
    )
  }
}
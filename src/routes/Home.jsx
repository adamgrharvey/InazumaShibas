import '../CSS/Home.css';
import ayaabout from "../images/aya-about-PhotoRoom.png-PhotoRoom.png";
export default function Home(props) {

  return (
    <>
      <div className='Home'>
        <p><span className='move1 Title'>Inazuma </span><span className='move2 Title' >Shibas</span></p>
        <img className='HomePhoto' src={ayaabout}></img>
      </div>
    </>
  )
}
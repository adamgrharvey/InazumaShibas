import '../CSS/Dogs.css';
import ayaprofile from "../images/aya-profile-crop.webp";
export default function Dogs(props) {

  return (
    <>
      <div className='w-3/5 flex flex-row mt-6'>
        <div className='max-h-max ml-3 mr-3 flex items-center'>
          <img className='rounded-full AyaProfile' src={ayaprofile}></img>
        </div>
        <div className="ml-3 mr-3">
          <p className='font-bold'>Aya (GCH Sunojo's Kaika Suru Ayame)</p>
          <p className='mt-4'>Our lovely girl comes from a long line of Shiba Inu's that were imported from Japan. The co-owner of this beautiful girl, Susan Norris-Jones from Sunojo kennels, has been breeding Shiba's since 1985. We are extremely fortunate to have Susan as our mentor in this remarkable breed.</p>
          <p className="mt-4">Aya herself is a very elegant and spunky girl. She loves learning new tricks and is eager to impress, however her greatest joy in life is to argue back and to make sure her opinion is heard. She is our foundation bitch and we can't wait to see what she holds for us in the future.</p>
          <p className="mt-4">Aya finished her Championship in only one month of showing with group placings. She went on to attain Grand Champion status at 18 months old.</p>
        </div>
      </div>

    </>
  )
}
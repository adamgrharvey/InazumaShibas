import '../CSS/Home.css'
import { useState, useEffect } from 'react'
import ayaabout from '../images/aya-about-PhotoRoom.png-PhotoRoom.png'
import LightningBolt from '../components/LightningBolt'
export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [, setCount] = useState(0)

  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      setCount(0)
      // Wait for two second
      const timer = setInterval(() => {
        setCount((prev) => prev + 1)
      }, 45)

      await new Promise((r) => setTimeout(r, 2200))
      // Toggle loading state
      setIsLoading(false)
      clearInterval(timer)
    }

    loadData()
  }, [])

  if (isLoading) {
    return <LightningBolt />
  } else {
    return (
      <>
        <div className="Home fadeInPage">
          <p>
            <div className="move1 Title1">Welcome To </div>
            <div className="move2 Title2">Inazuma Shibas</div>
          </p>
          <img className="HomePhoto" alt="ayaabout" src={ayaabout}></img>
          {/*
          <div>
            <p>
              I have moved over 25 times in my life and the one thing that has been stable and consistent is my friendship with Melinda. She is a person I heavily lean on for encouragement and positivity. The closest family I have, and I am forever grateful for the rock that she has become in my life. I am delighted that this opportunity to share a kennel has come so naturally and look forward to our future together as a team.
            </p>
            <p>
              Experience
              My name is Ashley Turner. Since 2005 I have assisted with breeding, showing and training a variety of dog breeds. These include St Bernards, Beagles, Collies, NSDT and Bulldogs. For many years I assisted My mother in breeding, whelping and raising Saint Bernard's for pet and show homes.
              For conformation showing I was mentored by Wendy Lee, alongside Melinda Douglas and Janine Morton as a junior handler. There was a time where I also traveled with a professional handler onto the BC mainland where I experienced showing Chinese Crested, Bichon Frise and soft Wheaten Terriers.
            </p>
            <p>
              My Story
              My first dog was a Saint Bernard named Amy. She was my partner for the majority of my Junior Handling career. With her I won Second in a Provincial Junior Handling competition. She was the dog that made me fall in love with the sport and showed me how far a bond can take you!  St. Bernard's were my first love unfortunately due to their size I was unable to have one when I moved out on my own. At one point, on a trail run I raised a family members beagle and had one litter of pups, but something was missing.  So I began searching for the perfect breed for my life-style and personality to match mine!
            </p>
            <p>
              Now and for the Future
              In 2018 Melinda suggested the Shiba Inu. I began to look into the breed and seriously consider it. Thankfully I had the opportunity to assist Melinda in helping Susan Norris-Jones with her Shiba’s and got to meet and see the Shiba’s in their home environments to finally decide that they were exactly what I was looking for; A big dog in a small package! With the heightened interest in the Shiba Inu breed due to memes and social media, the preservation of the breed has become a pressing concern for me. As a breeder my goal is to stay true to their heritage and the Japanese breed standard. To contribute positively to the future of this unique breed for their health, soundness and temperament.
            </p>
          </div>
           */}
        </div>
      </>
    )
  }
}

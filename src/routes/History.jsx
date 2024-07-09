import { useEffect, useState } from 'react'
import '../CSS/History.css'
import aya_about from '../images/aya-about.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'
import LightningBolt from '../components/LightningBolt'
export default function History(props) {
  useEffect(() => {
    Aos.init({ debounceDelay: 50, duration: 1200, once: false, mirror: true })
  })


  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2200)
  }, [])

  if (isLoading) {
    return <LightningBolt />
  } else {
    return (
      <>
        <img alt='aya-banner' className="ml-5 mr-5 AyaPic fadeInPage" src={aya_about}></img>
        <div className="HomeText fadeInPage flex flex-col">
          <p className="font-bold mb-4 underline history-title">Breed Description</p>
          <div className="history-text">
            <div data-aos="fade-right" className="aos-item">
              <p className="font-bold mt-5 history-title">Origin and Purpose</p>
              <p>
                {' '}
                The Shiba was developed in Japan, and is the smallest of the native Japanese breeds.
                Developed as a hunting dog for boar, rabbit, grouse and other small game in dense
                undergrowth, the Shiba needed strength, agility and a coarse thick coat, as well as
                courage and tenacity. While still retaining these hunting skills, the Shiba is now
                primarily an excellent companion.{' '}
              </p>
            </div>

            <div data-aos="fade-right" className="aos-item">
              <p className="font-bold mt-5 history-title">General Appearance and Characteristics</p>
              <p>
                {' '}
                The Shiba is a small dog of Spitz type, just off-square, well balanced and muscular,
                with erect ears, dark slanted eyes, tapered muzzle, and coarse standoff coat. Males
                and females display both strength and elegance, neither coarse nor fine, while
                retaining obvious differences. The overall impression conveys a spirited boldness,
                good nature, alertness and agility.
              </p>
            </div>

            <div data-aos="fade-right" className="aos-item">
              <p className="font-bold mt-5 history-title">Temperament</p>
              <p>
                {' '}
                Spirited boldness, good nature, and independence characterize the Shiba temperament.
                Extremely lively and fun-loving with their families. While sometimes aloof with
                strangers, aggression to humans or extreme shyness to be severely penalized. Shibas
                may not tolerate other dogs’ intrusions, and will display aggression if challenged.{' '}
              </p>
            </div>

            <div data-aos="fade-right" className="aos-item">
              <p className="font-bold mt-5 text-2xl history-split">
                {' '}
                The Japanese have three terms to characterise the Shiba's combined intrinsic
                qualities.
              </p>
            </div>

            <div data-aos="fade-right" className="aos-item">
              <p className="font-bold mt-5 history-title">KAN'I</p>
              <p>
                {' '}
                Kan'i is the most important quality of a Japanese breed. It means not only
                dauntlessness, audacity and courage, but also mental strength, harmony, balance and
                self-assurance. In Japan the male dogs stand vis-á-vis in a circle, like the
                Terriers in the USA. A male dog having kan'i confronts his competitor face to face
                with composure and looks him calmly and straight in the eye. He keeps his tail
                tightly in position. If the dog averts his eyes or allows his view to wander, the
                white of his eyes protrude or if he is unsettled or lets his tail droop, then he has
                no kan'i and will never get a good rating.
              </p>
            </div>

            <div data-aos="fade-right" className="aos-item">
              <p className="font-bold mt-5 history-title ">RYOSEI</p>
              <p>
                {' '}
                The good character of a Shiba is a peace-loving, pleasant, faithful and obedient
                character. A good Shiba must be a good watchdog and companion – clever, easy to
                handle and companionable. He must have keen senses, but most of all he must be
                obedient and respect his master.
              </p>
            </div>

            <div data-aos="fade-right" className="aos-item">
              <p className="font-bold mt-5 history-title">SOBOKU</p>
              <p>
                {' '}
                Naturalness, vivacity, briskness, straightforwardness and spontaneity, that is the
                third essential aspect of the Shiba's personality. A good Shiba must not be
                obtrusive and affected, as many small breeds are, but above all he must not be
                uncouth or vulgar. Soboku indicates the dog's natural and intrinsic beauty and
                harmony.
              </p>
            </div>

            <div data-aos="fade-right" className="aos-item history-link history-split">
              <p className="mt-5">
                For more information, refer to the
                <a href="https://www.ckc.ca/CanadianKennelClub/media/Breed-Standards/Group%206/Shiba-Inu.pdf?ext=.pdf">
                  <span className="ckc-link"> CKC Shiba Inu breed standard</span>
                </a>
              </p>
            </div>
            <div className="mb-10 mt-10"></div>
          </div>
        </div>
      </>
    )
  }
}

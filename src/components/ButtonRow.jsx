import { useEffect, useState } from 'react'
import '../App.css'
import '../index.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'

export default function ButtonRow(props) {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 724)
  const [hamburgerMenu, setHamburgerMenu] = useState(false)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 724)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  // deprecated, but updates DOM on URL load, keeping in.
  const [selected, setSelected] = useState(0)

  if (!isDesktop) {
    return (
      <div>
        <div className="Hamburger">
          <IconButton
            onClick={() => setHamburgerMenu((prev) => !prev)}
            className="!pt-0 !pb-1"
            size="large"
          >
            <MenuRoundedIcon style={{ color: 'white', fontSize: '30px' }} />
          </IconButton>
        </div>
        <div className={hamburgerMenu ? 'fadeIn' : 'fadeOut'}>
          <div className="Links">
            <div>
              <Link to={'/'}>
                <button
                  onClick={() => {
                    setSelected(0)
                    setHamburgerMenu(false)
                  }}
                  className={`button${window.location.pathname === '/' ? '-selected' : ''}`}
                >
                  Home
                </button>
              </Link>
              <Link to={'/about-shibas'}>
                <button
                  onClick={() => {
                    setSelected(1)
                    setHamburgerMenu(false)
                  }}
                  className={`button${window.location.pathname === '/about-shibas' ? '-selected' : ''}`}
                >
                  About Shibas
                </button>
              </Link>
              <Link to={'/our-shibas'}>
                <button
                  onClick={() => {
                    setSelected(2)
                    setHamburgerMenu(false)
                  }}
                  className={`button${window.location.pathname === '/our-shibas' ? '-selected' : ''}`}
                >
                  Our Shibas
                </button>
              </Link>
              <Link to={'/puppies'}>
                <button
                  onClick={() => {
                    setSelected(3)
                    setHamburgerMenu(false)
                  }}
                  className={`button${window.location.pathname === '/puppies' ? '-selected' : ''}`}
                >
                  Puppies
                </button>
              </Link>
              <Link to={'/achievements'}>
                <button
                  onClick={() => {
                    setSelected(4)
                    setHamburgerMenu(false)
                  }}
                  className={`button${window.location.pathname === '/achievements' ? '-selected' : ''}`}
                >
                  Achievements
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Link to={'/'}>
        <button
          onClick={() => setSelected(0)}
          className={`button${window.location.pathname === '/' ? '-selected' : ''}`}
        >
          Home
        </button>
      </Link>
      <Link to={'/about-shibas'}>
        <button
          onClick={() => setSelected(1)}
          className={`button${window.location.pathname === '/about-shibas' ? '-selected' : ''}`}
        >
          About Shibas
        </button>
      </Link>
      <Link to={'/our-shibas'}>
        <button
          onClick={() => setSelected(2)}
          className={`button${window.location.pathname === '/our-shibas' ? '-selected' : ''}`}
        >
          Our Shibas
        </button>
      </Link>
      <Link to={'/puppies'}>
        <button
          onClick={() => setSelected(3)}
          className={`button${window.location.pathname === '/puppies' ? '-selected' : ''}`}
        >
          Puppies
        </button>
      </Link>
      <Link to={'/achievements'}>
        <button
          onClick={() => setSelected(4)}
          className={`button${window.location.pathname === '/achievements' ? '-selected' : ''}`}
        >
          Achievements
        </button>
      </Link>
    </>
  )
}

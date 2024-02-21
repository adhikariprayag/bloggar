import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.scss'
import Logo from '../img/logo2.png'
function Navbar() {

  // Add and Remove Class on scroll
  const [scrolltopdata, setscrolltopdata] = useState('')
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 15) {
        setscrolltopdata('');
      }
      else {
        setscrolltopdata('scrolled animate__animated animate__fadeInDown');
      }
    });
  }, [])

  //Menu button
  const [handlemenu, sethandlemenu] = useState()
  function handle() {
    sethandlemenu( prevmenu => (prevmenu === ''? 'down' : ''))
  }

  return (
    <>

      <header className={`navbar ${scrolltopdata}`}>
        <nav className='container d-flex align-items-center '>
          <div>
            <Link to="/"><img src={Logo} alt="" /></Link>
          </div>

          <div className='mx-auto d-lg-block d-none '>
            <ul className='d-flex gap-5 m-0 p-0 '>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Pages</Link></li>
              <li><Link to="/">Lifestyle</Link></li>
              <li><Link to="/">Foods</Link></li>
              <li><Link to="/">Business</Link></li>
              <li><Link to="/">Travels</Link></li>
              <li><Link to="/">Post</Link></li>
            </ul>
          </div>

          <div>
            <ul className='d-flex gap-4 fs-3 '>
              <li><i className="ri-search-line"></i></li>
              <li className='d-lg-none'><i className="ri-menu-3-line btn text-light fs-3 " onClick={handle}></i></li>
            </ul>
          </div>
        </nav>
      </header>

      <div className={`mob-menu d-flex align-items-center flex-column gap-4 ${handlemenu} `} >
        <div><i class="ri-arrow-drop-up-line btn border border-2 rounded-5 fs-3 text-light " onClick={handle} ></i></div>
        <ul className='d-flex flex-column gap-4 m-0'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Pages</Link></li>
          <li><Link to="/">Lifestyle</Link></li>
          <li><Link to="/">Foods</Link></li>
          <li><Link to="/">Business</Link></li>
          <li><Link to="/">Travels</Link></li>
          <li><Link to="/">Post</Link></li>
        </ul>
      </div>

    </>
  )
}

export default Navbar
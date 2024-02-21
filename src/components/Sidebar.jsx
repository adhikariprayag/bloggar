import React, { useEffect, useState } from 'react'
import '../styles/Sidebar.scss'
import { Link } from 'react-router-dom';

function Sidebar() {

    const [slide, setslide] = useState('')

    function handleClick() {
        setslide(prevSlide => (prevSlide === '' ? 'slide' : ''));
    }

    return (
        <>
            <section className="sidebar d-none d-md-block">
                <div className="btn arw-icon" onClick={handleClick}>
                    <i className="ri-arrow-right-s-line fs-4 "></i>
                </div>
                <div className={`side-menu ${slide}`}>
                    <div className='text-center py-4'>
                        <div className='py-4 w-100 text-center '>
                            <i className="ri-arrow-left-s-line btn l-arw-icon text-light border border-3 fs-2 rounded-5 " onClick={handleClick}></i>
                        </div>
                        <div className='pt-5 '>
                            <h5 className='fw-medium fs-3 '>Trending Topics</h5>
                        </div>
                        <div className='py-4'>
                            <ul className='m-0 px-5 py-3 '>
                                <li className='border-bottom py-3 border-secondary '><Link to="/" className='fw-medium fs-5 text-secondary '><i class="ri-arrow-drop-right-line"></i> Lifestyle</Link></li>
                                <li className='border-bottom py-3 border-secondary '><Link to="/" className='fw-medium fs-5 text-secondary '><i class="ri-arrow-drop-right-line"></i> Fashion</Link></li>
                                <li className='border-bottom py-3 border-secondary '><Link to="/" className='fw-medium fs-5 text-secondary '><i class="ri-arrow-drop-right-line"></i> Health</Link></li>
                                <li className='border-bottom py-3 border-secondary '><Link to="/" className='fw-medium fs-5 text-secondary '><i class="ri-arrow-drop-right-line"></i> Travel</Link></li>
                                <li className='border-bottom py-3 border-secondary '><Link to="/" className='fw-medium fs-5 text-secondary '><i class="ri-arrow-drop-right-line"></i> Business</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sidebar
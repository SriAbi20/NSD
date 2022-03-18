import { Facebook, Instagram, LinkedIn,  } from '@mui/icons-material'
import GitHubIcon from '@mui/icons-material/GitHub';
import React, { useState } from 'react'
import './Main.scss'
import man from '../../images/White.png'
import Typical from 'react-typical';

const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello,I'M <span className="highlighted-text">Sri Abinaya</span>
                            </span>
                        </div>
                        <div className='profile-details-role'>
                            <span className=''>
                                {" "}
                                <h1>
                                    {" "}
                                    <Typical
                                    loop={Infinity}
                                    steps={[
                                     "Software Developer 😎",
                                     1000,
                                     "Full stack Developer 💻",
                                     1000,
                                    ]} />
                                </h1>
                                <span className='profile-role-tagline'>
                                Knack of building applications with front and back end operations.
                                    </span>
                                </span>
                            </div>

                            <div className="icons">
                            <a href='https://www.linkedin.com/in/sri-abinaya/'>
                              <LinkedIn className='icon'/>
                              </a>
                               <a href='https://www.instagram.com/sriabinaya1997/'>
                                <Instagram className='icon'/>
                               </a>
                                <Facebook className='icon'/>
                                <a href='https://github.com/SriAbi20'>
                                <GitHubIcon className='icon'/>
                                </a>
                                
                                
                            </div>


                   

                    </div>


                </div>


                <div className="main__img">
                    <img src={man} alt="" />
                </div>


            </div>



        </div>
    )
}


export default Main
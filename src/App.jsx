import { useState } from 'react'
import './App.css'
import Image_Avatar from '../public/assets/images/avatar-jessica.jpeg'

function App() {

  return (
    <>
      <div className='main-container'>
        <div className='image'>
          <img src={Image_Avatar} alt='avatar-jessica'/>
        </div>
        <div>
          <p><h2>Jessica Randall</h2></p>
          <span style={{color: 'yellow'}}> London, United Kingdom</span>
          </div>
          <div>
            <p>"Front-end developer and avid reader."</p>
          </div>
          <div>
            <div className='button'>
            <a href="#"><button>GitHub</button></a>
            </div>
            <div  className='button'>
            <a href="#"><button>Frontend Mentor</button></a>
            </div>
            <div  className='button'>
            <a href="#"><button>LinkedIn</button></a>
            </div>
            <div  className='button'>
            <a href="#"><button>Twitter</button></a>
            </div>
            <div  className='button'>
            <a href="#"><button>Instagram</button></a>
            </div>
          </div>
          <div className="attribution">
             Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
              Coded by <a href="#">Alibabs</a>.
        </div>
      </div>
    </>
  )
}

export default App

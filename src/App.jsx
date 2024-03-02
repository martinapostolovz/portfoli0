import { useState } from 'react'
import ReactDOM from "react-dom";
import reactLogo from './assets/react.svg'
import './App.css'


function App() {

  return (
    <div className="App">
      <header className='header-background'>
        <div className='name-header'>
          <p className='name'>ApostolovZZ</p>
        </div>
        <div className='header-button-no-mobile'>
          <a href='/portfoli0/experience/'><button id='About-nomobile'>About</button></a>
          <button id='Contact-nomobile'>Contact</button>
        </div>
        <div className='header-button-mobile'>
          <div className='menu-logo'>
            <div id='line' className='line'></div>
            <div id='line2' className='line'></div>
            <div id='line3' className='line'></div>
          </div>
          <br />
          <div className='buttons-menu-mobile'>
            <button className='about-button-mobile'>About</button>
            <hr id='under-linei' className='under-menu-logo-line' />
            <button className='contact-button-mobile'>Contact</button>
          </div>
        </div>
      </header>
      <main>
        <div className='background'>
          <div className='picture-name-work'>
          <img id='pic-of-me' className='picture-of-me' src="../images/apostolovzz.jpg" alt="" />
            <div className='name-work'>
              <p className='name-surname'>Martin Apostolov</p>
              <p className='what-i-work'>Front-End <p className='developer-tx'>Developer</p></p>
            </div>
          </div>
          <div className='blocks-about-me'>
            <div className='first-block'>
              <div>
                <p className='how-start-tx'>How it started:</p>
                <p className='big-text-how-i-start'>I was on a call with a friend who sent me a link to view a webpage. I opened the link and became interested in creating webpages myself. My friend showed me how to use HTML for creating webpages. Later on, I learned CSS so that I could design full webpages with better layout.</p>
              </div>
            </div>
            <div className='the-second-block'>
              <p className='what-i-konw-tx'>What i know to work:</p>
              <p className='what-know-big-tx'>I am a super passionate in HTML, CSS, and JavaScript, and can create a quality website that ranks well on Google.</p>
            </div>
            <div className='the-third-block'>
              <p className='exp-tx'>Experience:</p>
              <div className='blcoks-exp'>
                <div className='blocks-experience-logo'>
                  <p className="html">Html</p>
                  <p className="css">Css</p>
                  <p className="react">React JS</p>
                  <p className="javascript">JS</p>
                </div>
              </div>

            </div>
            <div className='about-me-block'>
              <div className='age'>
                <p>Age:</p>
                <p id='age-num'>15</p>
              </div>
              <div className='city'>
                <p>City:</p>
                <p id='city-kavadarci'>Kavadarci</p>
              </div>
              <div className='residence'>
                <p>Residence:</p>
                <p id='residence-macedonia'>Macedonia</p>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </main>
      <br />
      <footer>
        <div className='footer'>
          <p>© 2024. All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default App

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
          <button id='About-nomobile'>About</button>
          <a href='/portfoli0/portfolio/'><button id='portfolio-nomobile'>Portfolio</button></a>
          <a href='/portfoli0/contact/'><button id='Contact-nomobile'>Contact</button></a>
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
            <a href='/portfoli0/portfolio/'><button id='portfolio-mobile'>Portfolio</button></a>
            <hr id='under-linei' className='under-menu-logo-line' />
            <a href='/portfoli0/contact/'><button className='contact-button-mobile'>Contact</button></a>
          </div>
        </div>
      </header>
      <main>
        <div className='background'>
          <div className='picture-name-work'>
            <div id='pic-of-me' className='picture-of-me'></div>
            <div className='name-work'>
              <p className='name-surname'>Martin Apostolov</p>
              <p className='what-i-work'>Front-End <p className='developer-tx'>Developer</p></p>
            </div>
          </div>
          <div className='blocks-about-me'>
            <div className='first-block'>
              <div>
                <p className='how-start-tx'>How it started:</p>
                <p className='big-text-how-i-start'>During a conversation with an acquaintance, I was directed to a webpage via a hyperlink. Upon accessing the link, I developed an interest in delving into the creation of web content. Subsequently, my acquaintance provided guidance on the utilization of HTML for webpage development. Over time, I expanded my skill set to include CSS, enhancing my ability to craft comprehensive web designs with improved layout aesthetics.</p>
              </div>
            </div>
            <div className='the-second-block'>
              <p className='what-i-konw-tx'>What i know to work:</p>
              <p className='what-know-big-tx'>I possess a strong passion for HTML, CSS, React, and JS, enabling me to proficiently craft high-quality websites that excel in Google rankings.</p>
            </div>
            <div className='the-third-block'>
              <p className='exp-tx'>Experience:</p>
              <div className='blcoks-exp'>
                <div className='blocks-experience-logo'>
                  <p className="html">HTML</p>
                  <p className="css">CSS</p>
                  <p className="react">REACT</p>
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

import React from "react";
import ReactDOM from "react-dom";
import './experience.css';


ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <header className='header-background'>
        <div className='name-header'>
          <p className='name'>ApostolovZZ</p>
        </div>
        <div className='header-button-no-mobile'>
          <a href='/portfoli0/experience/'><button id='About-nomobile'>About</button></a>
          <button id='Experience-nomobile'>Experience</button>
          <button id='Contact-nomobile'>Contact</button>
        </div>
        <div className='header-button-mobile'>
          <div className='menu-logo'>
            <div id='line' className='line'></div>
            <div id='line2' className='line'></div>
            <div id='line3' className='line'></div>
          </div>
          <hr className='under-menu-logo-line' />
          <div className='buttons-menu-mobile'>
            <button className='about-button-mobile'>About</button>
            <hr id='under-linei' className='under-menu-logo-line' />
            <button className='experience-button-mobile'>Experience</button>
            <hr id='under-linei' className='under-menu-logo-line' />
            <button className='contact-button-mobile'>Contact</button>
          </div>
        </div>
      </header>
      <main>
        <div className='background'>
          <div className="cards-what-i-work">
            <p className="html">Html</p>
            <p className="css">Css</p>
            <p className="react">React JS</p>
            <p className="javascript">JavaScript</p>
          </div>
        </div>
      </main>

    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
import React from "react";
import ReactDOM from "react-dom";
import './contact.css';




ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <header className='header-background'>
        <div className='name-header'>
          <p className='name'>ApostolovZZ</p>
        </div>
        <div className='header-button-no-mobile'>
          <a href='/https://martinapostolovz.github.io/portfoli0/'><button id='About-nomobile'>About</button></a>
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
            <a href='/https://martinapostolovz.github.io/portfoli0/'><button className='about-button-mobile'>About</button></a>
            <hr id='under-linei' className='under-menu-logo-line' />
            <a href='/portfoli0/contact/'><button className='contact-button-mobile'>Contact</button></a>
          </div>
        </div>
      </header>
      <main>
        <div className="backgrounds">
          <div className="first-background">
            <div className="profile-pic"></div>
            <p className="profle-name">Martin Apostolov</p>
            <p className="social-name">ApostolovZZ</p>
            <div className="first-under-bacground">
              <p className="email">Email:martinapostolov56@gmail.com</p>
            </div>
          </div>
          <div className="sec-bacground">
            <div className="conract-background">
              <a href="https://www.facebook.com/martin.apostolov.92372"><img className="facebook" src="../images/facebook.png" alt="" /></a>
              <a href="https://www.instagram.com/apostolovzz/"><img className="instagram" src="../images/instagram.png" alt="" /></a>
              <a href="https://github.com/martinapostolovz"><img className="github-img" src="../images/githubimg.png" alt="" /></a>
            </div>


          </div>
        </div>
      </main>

    </div>

  </React.StrictMode>,
  document.getElementById('root')
)
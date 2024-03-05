import React from "react";
import ReactDOM from "react-dom";
import './portfolio.css';




ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <header className='header-background'>
        <div className='name-header'>
          <p className='name'>ApostolovZZ</p>
        </div>
        <div className='header-button-no-mobile'>
          <a href='/portfoli0/'><button id='About-nomobile'>About</button></a>
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
            <a href='/portfoli0/'><button className='about-button-mobile'>About</button></a>
            <hr id='under-linei' className='under-menu-logo-line' />
            <a href='/portfoli0/portfolio/'><button id='portfolio-mobile'>Portfolio</button></a>
            <hr id='under-linei' className='under-menu-logo-line' />
            <a href='/portfoli0/contact/'><button className='contact-button-mobile'>Contact</button></a>
          </div>
        </div>
      </header>
      <main>
        <div className="background">
          <div className="project">
            <div className="project-background">
              <div className="swipe-animation">
                <div className="swipe-up-background-transparent">
                  <div className="see-more-background-project">
                    <div className="on-animation-background">
                      <p className="porfolio-tx">Porfolio</p>
                      <br />
                      <div className="link-of-project">
                        <a href="https://martinapostolovz.github.io/portfoli0/"><button className="link-button">PORTFOLIO</button></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>

  </React.StrictMode>,
  document.getElementById('root')
)
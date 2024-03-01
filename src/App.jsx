import { useState } from 'react'
import ReactDOM from "react-dom";
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className='header-background'>
        <div className='name-header'>
          <p className='name'>ApostolovZZ</p>
        </div>
        <div className='header-button-no-mobile'>
          <button id='About-nomobile'>About</button>
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
      <div className='background'>

      </div>
    </div>
  )
}

export default App

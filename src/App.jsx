import { useState } from 'react'
import ReactDOM from "react-dom";
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img className='darko' src="/images/darko.png" alt="" />
      <br />
      <p>darko e peder?</p>
      <a href='/portfoli0/about/'><button>see more?</button></a>
    </div>
  )
}

export default App

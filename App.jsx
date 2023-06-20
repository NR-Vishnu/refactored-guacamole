import { useState } from 'react'
import reactLogo from './assets/aaa.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="A">
    <div className="a">
        <h2>Register Here</h2>
        <form action="">
            <input type="text" id="form" name="name" placeholder="Name"></input><br/>
            <input type="text" id="form1" name="uname" placeholder="Username"></input><br/>
            <input type="email" id="form1" name="email" placeholder="Email"></input><br/>
            <input type="text" id="form1" name="password" placeholder="Password"></input><br/>
            <button className="btn">REGISTER</button>
        </form>
        
    </div>    

    </div>
    <div className="left">
    <img class="p1" src={reactLogo} alt="" />
        <h3>Join Us</h3>
        <p className="p">Subscribe Easy tutorials YouTube Channel to watch movie and videos</p>
        <button className="button">About Us</button>
    </div>
    </>
  )
}

export default App

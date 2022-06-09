import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
export default function Pagetwo({setpageOneChanges,setPosition,setToDrag}) {
  return <div className='page-two-section'>

    <div className='navigation-div'>
      <h1>page two</h1>
      <button onClick={() => {
        setpageOneChanges(true)
        setPosition("center")
        setToDrag("center")
      }}><Link to="/">Back</Link></button>
    </div>
    <div className='content-div'>
      <div>
      <h1>My Name is Balaji Narayana</h1>
      <h2>Front End Development enthusiast</h2>
      <h3>Recently i've Learned How to write  test cases to the code using JEST</h3>
      <h2>I majorly work with techinologies like  vanilla js, React.js HTML5,CSS </h2>
        <p>Exploring Redux Toolkit and i'm going to explore more on JEST(Test driven Developemnt way of writing code) and i wanted to laern Typescript</p>
        <h1>My projects</h1>
        <a href="https://spark-library.vercel.app/" target="_blank">SPark library(Video Library)</a>
        <a href="https://sparkcart.vercel.app/" target="_blank">SPark Kart(E-commerce)</a>
        <a href="https://sparkledger.vercel.app/" target="_blank">SPark Ledger(Note taking app)</a>
        <h3>Social media handles</h3>
        <a href="https://github.com/BALAJI141031?tab=reposihrefries" target="_blank">Github</a>
        <a href="https://twitter.com/Balu1031" target="_blank">Twitter</a>
        
      </div>
      </div>
  </div>
  
}

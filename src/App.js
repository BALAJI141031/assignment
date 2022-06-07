
import './App.css';
import PositionType from "./components/ControlPosotion/positionType"
import Clock from './components/Timer/normalClock'
import FloatingBlock from './components/DisplaySection/floatingBlock';
import { useState } from "react"
import { Routes, Route, Link } from 'react-router-dom'
import Pagetwo from './Routes/routeTwo'

const positionTypes=["center","lower-right"]
function App() {
  const [pageOneChanges, setpageOneChanges] = useState(false)
  const [position, setPosition] = useState(null)
  
  console.log(position,"what is final positin",position)
  return (
    <div className="App">     
      <Routes>
        <Route path="/" element={ 
          <>
            <header className="app-header flex-div flex-H-space-bw flex-H-center-V pos-fixed">
             <div className='flex-div position-control-div'>
              <p>Postion : </p>
              <div className='flex-div'>
                  {positionTypes.map((type) => <PositionType type={type} key={type} setPosition={setPosition} pageOneChanges={pageOneChanges} setpageOneChanges={setpageOneChanges}/>)}
            </div>
           </div>
            <p>Welcome to the vertica test A</p>
         <Clock/>
       </header>
      <main className="display-area"  >
              <div id={position !== null ? position : "ideal-position"}><FloatingBlock position={position} pageOneChanges={pageOneChanges}/></div>
        </main> 
        <footer className='pos-fixed flex-div flex-H-space-center flex-H-center-V'>
       <button> <Link to="/page2">
          Go to Page 2
       </Link> </button>
        </footer></>} />
        

        <Route path="/page2" element={<Pagetwo setpageOneChanges={setpageOneChanges} setPosition={setPosition}/>}/>
      </Routes>
      
    </div>
     

  );
}

export default App;

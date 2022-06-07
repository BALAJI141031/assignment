
import './App.css';
import PositionType from "./components/ControlPosotion/positionType"
import Clock from './components/Timer/normalClock'
import FloatingBlock from './components/DisplaySection/floatingBlock';
import { useState } from "react"
import { Routes, Route, Link } from 'react-router-dom'
import Pagetwo from './Routes/routeTwo'

const positionTypes=["center","lower-right"]
function App() {

const [position, setPosition] = useState(null)

  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={ 
          <>
            <header className="app-header flex-div flex-H-space-bw flex-H-center-V pos-fixed">
             <div className='flex-div position-control-div'>
              <p>Postion : </p>
              <div className='flex-div'>
            {positionTypes.map((type) => <PositionType type={type} key={type} setPosition={setPosition}/>)}
            </div>
           </div>
            <p>Welcome to the vertica test A</p>
         <Clock/>
       </header>
      <main className="display-area"  >
          <div id={position !== null ? position : "ideal-position"}><FloatingBlock position={position} /></div>
        </main> 
        <footer className='pos-fixed flex-div flex-H-space-center flex-H-center-V'>
       <button> <Link to="/page2">
          Go to Page 2
       </Link> </button>
        </footer></>} />
        

      <Route path="/page2" element={<Pagetwo/>}/>
      </Routes>
      
    </div>
     

  );
}

export default App;

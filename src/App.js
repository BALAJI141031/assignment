
import './App.css';
import PositionType from "./components/ControlPosotion/positionType"
import Clock from './components/Timer/normalClock'
import FloatingBlock from './components/DisplaySection/floatingBlock';
import { useState } from "react"
import { Routes, Route, Link } from 'react-router-dom'
import Pagetwo from './Routes/routeTwo'
import { useEffect,useRef } from 'react';

const positionTypes=["center","lower-right"]
function App() {
  const [pageOneChanges, setpageOneChanges] = useState(false)
  const [position, setPosition] = useState(null)
  const [floatingBlockStatus, setFloatingBlock] = useState(false)
  const [foating,setToFoat]=useState(false)
  


  // handling escape
  useEffect(() => {
    const handleEsc = (event) => {
       if (event.keyCode === 27) {
         setFloatingBlock(true)
          // console.log("handling escape`")
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // handle enter
  useEffect(() => {
  const handleEnter = (event) => {
       if (event.keyCode === 13) {
         setFloatingBlock(false)
        //  console.log("handling enter")
      }
    };
    window.addEventListener('keydown', handleEnter);

    return () => {
      window.removeEventListener('keydown', handleEnter);
    };
  }, []);


  let sliderbox = useRef(null);
  let boundary = useRef(null);

  function handleMouseDown(e) {
    e.preventDefault();
    let shiftX = e.clientX - sliderbox.current.getBoundingClientRect().left;
    let shiftY = e.clientY - sliderbox.current.getBoundingClientRect().top;
    function onMouseMove(event) {
      let newLeft =
        event.clientX - shiftX - boundary.current.getBoundingClientRect().left;

      let newTop =
        event.clientY - shiftY - boundary.current.getBoundingClientRect().top;
      if (newLeft < 0) {
        newLeft = 0;
      }
      if (newTop < 0) {
        newTop = 0;
      }

      let rightEdge =
        boundary.current.offsetWidth - sliderbox.current.offsetWidth;

      let topEdge =
        boundary.current.offsetHeight - sliderbox.current.offsetHeight;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }
      if (newTop > topEdge) {
        newTop = '400 px';
      }
      sliderbox.current.style.left = newLeft + 'px';
      sliderbox.current.style.top = newTop + 'px';
      console.log(newLeft + 'px', newTop + 'px');
    }

    function onMouseUp() {
      sliderbox.current.removeEventListener('mouseup', onMouseUp);
      sliderbox.current.removeEventListener('mousemove', onMouseMove);
    }

    sliderbox.current.addEventListener('mousemove', onMouseMove);
    sliderbox.current.addEventListener('mouseup', onMouseUp);
  }

 
  return (
    <div className="App">     
      <Routes>
        <Route path="/" element={ 
          <>
            <header className="app-header flex-div flex-H-space-bw flex-H-center-V pos-fixed">
             <div className='flex-div position-control-div'>
              <p>Postion : </p>
              <div className='flex-div'>
                  {positionTypes.map((type) => <PositionType type={type} key={type} setPosition={setPosition} pageOneChanges={pageOneChanges} setpageOneChanges={setpageOneChanges} position={position} setToFoat={setToFoat}/> )}
            </div>
           </div>
          <p>Welcome to the vertica test A</p>
         <Clock/>
       </header>
      
             <div className="display-area" ref={boundary}>
      <div
        className="slider"
        onMouseDown={(e) => handleMouseDown(e)}
        ref={sliderbox}
        onDragStart={function () {
          return false;
        }}
      ></div>
    </div>

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

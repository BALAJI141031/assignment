
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
  const [isItdragging,setToDrag]=useState("")
  


  // handling escape
  useEffect(() => {
    const handleEsc = (event) => {
       if (event.keyCode === 27) {
         setFloatingBlock(true)
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


  let activePosition
  let sliderbox = useRef(null);
  let boundary = useRef(null);

  if (position === "center") {
    if (sliderbox.current) {
    sliderbox.current.style.left = "";
    sliderbox.current.style.top ="";
    }
    
    activePosition="center"
  } else if (position === "lower-right") {
    if (sliderbox.current ) {
    sliderbox.current.style.left = "";
    sliderbox.current.style.top ="";
    }
    
    activePosition="lower-right"
  }



  function handleMouseDown(e) {
    e.preventDefault();
    let prevPositionY=e.target.offsetHeight+e.target.offsetTop
    if (prevPositionY <= 500) { 
      setPosition((prev) => null)
      setToDrag(true)
      let shiftX = e.clientX - sliderbox.current.getBoundingClientRect().left;
      let shiftY = e.clientY - sliderbox.current.getBoundingClientRect().top;
      function onMouseMove(event) {
        setToDrag("Dragging")
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
      }

      function onMouseUp() {
        setToDrag("Dragged position")
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      sliderbox.current.ondragstart = function() {
      return false;
    };
    } 
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
                  {positionTypes.map((type) => <PositionType type={type} key={type} setPosition={setPosition} pageOneChanges={pageOneChanges} setpageOneChanges={setpageOneChanges} position={position} setToDrag={setToDrag}/> )}
            </div>
           </div>
          <p>Welcome to the vertica test A</p>
         <Clock/>
       </header>
      
      <div className="display-area" ref={boundary}>
      <div
        id={ position === null ? "slider" : activePosition}
          onMouseDown={(e) => {
          handleMouseDown(e)}
        }
                style={floatingBlockStatus ? { display: "none" } : { display: "block" }}       
                className={pageOneChanges && "style-border"}
        ref={sliderbox}
       
              >
                
                {isItdragging}
      </div>
    </div>

        <footer className='pos-fixed flex-div flex-H-space-center flex-H-center-V'>
       <button> <Link to="/page2">
          Go to Page 2
       </Link> </button>
            </footer>
          </>}
        /> 
        <Route path="/page2" element={<Pagetwo setpageOneChanges={setpageOneChanges} setPosition={setPosition} setToDrag={setToDrag}/>}/>
      </Routes>
      
    </div>
     

  );
}

export default App;

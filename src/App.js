
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


  const dragableDiv = useRef(null);
  const boundaryDiv = useRef(null);
  const isMouseDown = useRef(false);
  const diffX = useRef(Number(80));
  const diffY = useRef(Number(30));

  const stopToDrag = () => {
    isMouseDown.current = false;
  };

  const onDragging = ({ clientX: mouseX, clientY: mouseY }) => {
    const {
      x: boundaryDivX,
      y: boundaryDivY
    } = boundaryDiv?.current?.getBoundingClientRect();

    const finalX = mouseX - diffX.current;
    const finalY = mouseY - diffY.current;
    if (
      isMouseDown.current &&
      (boundaryDiv.current ).offsetWidth -
        (dragableDiv.current ).offsetWidth >
        finalX &&
      (boundaryDiv.current ).offsetHeight -
        (dragableDiv.current ).offsetHeight >
        finalY &&
      boundaryDivX < finalX &&
      boundaryDivY < finalY
    ) {
      (dragableDiv.current ).style.left = `${finalX}px`;
      (dragableDiv.current ).style.top = `${finalY}px`;
    }
  };

  const startToDrag = ({ clientX: mouseX, clientY: mouseY }) => {
    setPosition("hey you are trying to drag me please drag from here.....")
    isMouseDown.current = true;
    const {
      x: dragableDivX,
      y: dragableDivY
    } = dragableDiv?.current?.getBoundingClientRect() ;

    diffX.current = mouseX - dragableDivX;
    diffY.current = mouseY - dragableDivY;
  };  
  let positionProps={}
  if (position === "center") {
    positionProps = {
      top: "50%",
      left: "50%",
      transform: "translateX(-50%)",
      transform: "translateY(-50%)"
    }
  } else if (position === "lower-right") {
    console.log("yes it is comingg,inside lower right after dreag")
    positionProps = {
      bottom: "0%",
      right: "0%",
      marginBottom:"100px"
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
                  {positionTypes.map((type) => <PositionType type={type} key={type} setPosition={setPosition} pageOneChanges={pageOneChanges} setpageOneChanges={setpageOneChanges} position={position} setToFoat={setToFoat}/> )}
            </div>
           </div>
          <p>Welcome to the vertica test A</p>
         <Clock/>
       </header>
           <div
            ref={boundaryDiv}
            style={{ height: "400px","background-color": "grey","margin-top": "100px",  }}>
       <div style={floatingBlockStatus?{display:"none"}:{display:"block"}}> <div
            ref={dragableDiv}
            onMouseMove={(evt) => {
            onDragging(evt);
        }}
            onMouseOut={() => stopToDrag()}
            onMouseUp={() => stopToDrag()}
                onMouseDown={(evt) => {
                  startToDrag(evt)
                  setToFoat(true)
                }
                }
                style={foating ? {
          height: "200px",
          width: "200px",
          backgroundColor: "#8777ff",
          color: "white",
          position: "absolute",
          
        }:{
            position:"fixed",
            height: "200px",
            width: "200px",
            backgroundColor: "#8777ff",
            color: "white",
            ...positionProps,   
        }}
        className={pageOneChanges && "style-border"}                  
      ><p style={{fontSize:"20px", padding:"10px"}}>{position}</p> </div>
    </div> </div>
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

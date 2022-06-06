
import './App.css';
import PositionType from "./components/ControlPosotion/positionType"
import Clock from './components/Timer/normalClock'

const positionTypes=["center","LowerRight"]
function App() {
  return (
    <div className="App">
      <header className="app-header flex-div flex-H-space-bw flex-H-center-V">
        <div className='flex-div position-control-div'>
          <p>Postion : </p>
          <div className='flex-div'>
            {positionTypes.map((type) => <PositionType type="type" key={type}/>)}
         </div>
        </div>
        <p>Welcome to the vertica test A</p>
        <Clock/>
      </header>
    </div>
  );
}

export default App;

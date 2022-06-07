
import './index.css'

export default function FloatingBlock({ position,pageOneChanges }) {
    
  return (
      <div id='floating-block' className={pageOneChanges && "style-border"}> 
          <p>{position}</p>    
    </div>
  )
}

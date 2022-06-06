import { useEffect, useState } from 'react'

export default function Clock() {
    const currentTime = new Date().toLocaleTimeString()
    const [time, setTime] = useState(currentTime)
    
    // handler to updatetime for every second

    const updateTime = () => {
        const currentTime = new Date().toLocaleTimeString()
        setTime(currentTime)
    }

    useEffect(() => {
        const intervalId = setInterval(updateTime, 1000)
        
        // we should clean up interval 
            return ()=> {
            clearInterval(intervalId)
        }
    },[])
  return (
      <p className='m-right'>{time}</p>
  )
}

import React, { useEffect, useState } from 'react'

function Timer() {

    const [time, setTime] = useState(0);
    const [counting, setCounting] = useState(false);

    useEffect(() => {
        if (counting == true) {
            const interval = setInterval(() => {
                setTime((time) => time + 1) ;
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [counting])

  return (
    <div>
        <h2>{time}</h2>
        <button onClick={() => setCounting(true)}>Start</button>
        <button onClick={() => setCounting(false)}>Stop</button>
    </div>
  )
}

export default Timer
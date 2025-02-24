import React from 'react'
import { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
        if (count == 100) {
            setCount(count);
        } else {
            setCount(count + 1);
        }
    }

    const supp = () => {
        if (count == 0) {
            setCount(count);
        } else {
            setCount(count - 1);
        }
    }

    const refresh = () => {
        setCount(0);
    }



  return (
    <div>
        <p>Compteur : {count}</p>
        <button onClick={() => supp(count)}>-</button>
        <button onClick={() => add(count)}>+</button>
        <button onClick={() => refresh(count)}>Réinitialiser</button>
    </div>
  )
}


export default Counter
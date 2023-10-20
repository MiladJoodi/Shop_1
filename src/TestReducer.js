import React, { useReducer, useState } from 'react'
import './TestReducer.css'

// const countReducer = (state, action)=> {
//     switch(action.type){
//         case 'ADD': {
//             return {
//                 count: state.count + 1
//             }
//         }
//         case 'MINUS': {
//             return {
//                 count: state.count - 1
//             }
//         }
//         default:{
//             return state
//         }
//     }
// }

export default function TestReducer() {
    // const [count, setCount] = useState(0)
    const [count, setCount] = useReducer(()=>{}, 0)


    const addCount = ()=> setCount(prevCount=> prevCount + 1)
    const minusCount = ()=> setCount(prevCount=> prevCount - 1)




    
    // const [count, setCount] = useState(0)

    // const [counter, dispatch] = useReducer(countReducer , {count: 0})

    // const addNumber = ()=> setCount(prevCount => prevCount+1)
    // const minusNumber = ()=> setCount(prevCount => prevCount-1)



  return (
    <div>
        <h1>{count}</h1>
        <button onClick={addCount}>Add</button>
        <button onClick={minusCount}>Minus</button>
    </div>
  )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseByTen, decrement, decreseByFive, increaseByFive, increaseByTen, increment } from '../redux/counterSlice'

const Counter = () => {
    const count = useSelector(state=>state.counter)
    const dispatch = useDispatch()
  return (
    <div>
     <h2>{count}</h2>
     <button onClick={()=>dispatch(increment())}>+1</button>
     <button onClick={()=>dispatch(increaseByFive(5))}>+5</button>
     <button onClick={()=>dispatch(increaseByTen(10))}>+10</button>
     <button onClick={()=>dispatch(decrement())}>-1</button>
     <button onClick={()=>dispatch(decreseByFive(5))}>-5</button>
     <button onClick={()=>dispatch(decreaseByTen(10))}>-10</button>
    </div>
  )
}

export default Counter

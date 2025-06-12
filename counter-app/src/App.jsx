import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './features/counter/CounterSlice'


const App = () => {
  const count=useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0)

  return (
    <div style={{textAlign: 'center', marginTop:"5 rem"}}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <div style={{margin: '1rem'}}>
      <button onClick={()=> dispatch(increment())}>Increment</button>{''}
      <button onClick={()=> dispatch(decrement())}>Decrement</button>{''}
      <button onClick={()=> dispatch(reset())}>Reset</button>{''}
      </div>

      <div style={{margin:'1rem'}}>
        <input type="number" value={amount} onChange={(e)=> setAmount(Number(e.target.value))} placeholder='Enter Amount'/>

        <button onClick={()=> dispatch(incrementByAmount(amount))}>Add Amount</button>

      </div>
    </div>
  )
}

export default App

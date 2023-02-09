import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, decrementByAmount, incrementByAmount } from '../../store/slices/counterSlice'
import styled from 'styled-components'


function Home() {
    // Get Values from Store
    const count = useSelector(state => state.counter.value)

    // Update the Redux store using dispatch.
    const dispatch = useDispatch()

    return (
        <Div>
            <h1>Redux Slice Example</h1>
            <p>How we can use redux slice and redux store in our app, Please check code "./Screens/Home"</p>
            <div>
                <button onClick={() => dispatch(decrementByAmount(2))}>Decrement by 2</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <h4>{count}</h4>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
            </div>
        </Div>
    )
}

export default Home

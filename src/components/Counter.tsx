import {
  decrement,
  increment,
  reset,
  incrementByAmount,
  incrementAsync,
} from '@/redux/counter/counterSlice';
import { AppDispatch, RootState } from '@/redux/store';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="counter">
      <button className="counter__button" onClick={() => dispatch(decrement())}>
        -
      </button>
      <span className="counter__value" onClick={() => dispatch(reset())}>
        {count}
      </span>
      <button className="counter__button" onClick={() => dispatch(increment())}>
        +
      </button>
      <button className="counter__button" onClick={() => dispatch(incrementByAmount(10))}>
        Add 10
      </button>
      <button className="counter__button" onClick={() => dispatch(incrementAsync(10))}>
        Add 10
      </button>
    </div>
  );
};

export default Counter;

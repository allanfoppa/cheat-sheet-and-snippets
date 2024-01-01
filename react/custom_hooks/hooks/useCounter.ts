import { useState } from 'react';

export const useCounter = (initialValue: number = 0) => {
  const [ count, setCount ] = useState(initialValue);

  const increment = () => setCount((c: number) => c + 1);
  const decrement = () => setCount((c: number) => c - 1);

  return {
    count,
    increment,
    decrement
  };
}

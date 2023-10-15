import {ItemCounter} from '../AddToCartButton';
import {useEffect, useState} from 'react';

const ItemCounterButton = (props: {value: number}) => {
  const maxLimit: number = 30;
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(props.value);
  }, []);

  const updateCounterValueBy = (value: number) => {
    if (value == 1 && count == maxLimit) {
      return;
    }
    if (value == -1 && count == 0) {
      return;
    }
    setCount(count + value);
  };
  return (
    <ItemCounter
      value={count}
      onDecrease={() => {
        updateCounterValueBy(-1);
      }}
      onIncrease={() => {
        updateCounterValueBy(1);
      }}
    />
  );
};

export default ItemCounterButton;

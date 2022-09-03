import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount } from "./counterSlice";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button type="button" onClick={() => dispatch(decrement())}>
        -
      </button>
      <button type="button" onClick={() => dispatch(increment())}>
        +
      </button>
    </div>
  );
};

export default Counter;

import "./App.css";
import { Nav } from "./assets/Nav";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment,incrementByAmount,multiply} from "./assets/redux/counter/Counter";
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Nav />
      <div className="mt-[10%]">
      <button
          onClick={() => dispatch(multiply())}
          className="bg-red-600 text-yellow-300 text-xl"
        >
          *
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="bg-red-600 ml-4 text-yellow-300 text-xl"
        >
          +
        </button>
        <span className="text-4xl  p-5">count value is {count}</span>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-600 text-yellow-300 text-xl"
        >
          -
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="bg-red-600 m-4 text-yellow-300 text-xl"
        >
          ++
        </button>
      </div>
    </>
  );
}

export default App;

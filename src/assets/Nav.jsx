import { useSelector, useDispatch } from "react-redux";
export const Nav=()=>{
const count = useSelector((state) => state.counter.value);
    return(
        <>

       <h1>This is Counter{count}</h1>

        </>
    )
}
import { useState } from "react";

function Box(props) {

    const [count, setCount] = useState(0); //"contador hijo"
    
    function click() {
        props.boxClicked(props.id);
       setCount(count + 1)
    }
    return (
        <div onClick={()=>click()}>
           <p>Box {props.id}</p>
           <p>Contador hijo{count}</p>
           <p>diferencia con su hermana:{count - props.brotherCount} </p>
        </div>
    )
}

export default Box;

// useState
import { useState } from "react";
   
function StateCom(){
  // 2 thing -> count is current state which is 0.
  // setCount is other state which will update.
  const [count, setCount] = useState(0)

  function handleButton(){
    setCount(count+1)
  }
  return(
    <button onClick={handleButton} >
    clicked {count} Items
    </button>
    
  )

}

export default StateCom;
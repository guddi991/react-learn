

// events
function Mybutton(){

    function handleButton() {
      prompt('Why you clicked?');
    }
    return (
      <button onClick={ handleButton }>Submit</button>
    )
  }
  
  export default Mybutton
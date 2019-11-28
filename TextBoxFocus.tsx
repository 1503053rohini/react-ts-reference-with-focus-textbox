import React from 'react';



// function TextBoxFocus()
// {
//   let handleInput= React.createRef();
//   function autoFocus()
//   {
//     handleInput.current.focus();
//   }
// return(
//   <div>
//   <input type="text" ref={handleInput}/>
//   <button onClick={autoFocus}>Click Me</button>
//   </div>
// )
// }


//with callback ref
function TextBoxFocus()
{
  let handleInput;
  function autoFocus()
  {
    handleInput.focus();
  }
return(
  <div>
  <input type="text" ref={(handle)=>handleInput=handle}/>
  <button onClick={autoFocus}>Click Me</button>
  </div>
)
}

export default TextBoxFocus;
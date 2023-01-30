import { useState } from "react"; //register different states we want to see/use in the application. Good for showing and hiding an overlay 
import Modal from "./Modal.js";
import Backdrop from "./Backdrop.js";
//name of function should be capital character. React internally differentiates between built in elements and custom elements. Custom elements need to be capitalized
function Todo(props) {
  // props is a javascript object parameter accepted by the function component parameter. It is an object where all the attributres in/on the element are avaibale in key value pairs in the object
  //called react hooks, need to call it directly in the component function
  const [modalIsOpen, setModalIsOpen] = useState(false); // Always returns an array with 2 elements

  //Can put functions inside other functions in reactjs
  function deleteHandler() {
    //For convention, put Handler in the function name for functions that are exectured upon evernts
    setModalIsOpen(true);

    //  console.log(modalIsOpen);
    //console.log(setModalIsOpen);
    //console.log(props.text);
  }

  function closeModalHandler() {
    //For convention, put Handler in the function name for functions that are exectured upon evernts
    setModalIsOpen(false);
  }
  return (
    // must return something that can be rendered
    //this looks like html, but it is not. It is standard js, just looks different. Each element (div, button, hw) is a component of reactjs, not html.
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          {" "}
          Delete
        </button>{" "}
        {/*For onClick, you can do onClick = {function() {} (anonymous inline function)}, or ={() => {}} (arrow function syntax), or = {function name} (poinmt at another function)     */}
      </div>
      {modalIsOpen && <Modal onCancel = {closeModalHandler} onConfirm = {closeModalHandler} />}
      {/* if both conditions are true, then second value will be returned. Can also put modalIsOpen ? <Modal /> : null, where ? is an expression where if first part is true, render modal. : is else, and null means dont render or do anything */}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}
export default Todo;

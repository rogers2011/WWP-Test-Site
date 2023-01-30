//this is called Modal.js because this is the component responsible for rendering an overlay (a modal)

function Modal(props) {
function cancelHandler(){
    props.onCancel();
}
function confirmHandler(){
    props.onConfirm();
}


    return ( 
    //overlay component
    <div className = 'modal'>
        <p> Are you sure?</p>
        <button className = 'btn btn--alt' onClick = {cancelHandler}>Cancel</button>
        <button className = 'btn'          onClick = {confirmHandler}>Confirm</button>
    </div>
    );
}

export default Modal;
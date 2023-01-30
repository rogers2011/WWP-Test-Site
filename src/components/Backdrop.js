//Called Backdrop because this is the backdrop of the screen while the overlay (Modal) shows

function Backdrop(props) {
    return <div className = 'backdrop' onClick={props.onCancel} />;
}

export default Backdrop;

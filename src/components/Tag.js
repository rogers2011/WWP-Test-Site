

function Tag(props) {

    function addTag() {
        
    }

    return (

        <li onClick={addTag(this)}>
            <label className='category_label' onClick={props.onClick}>{props.text}</label>
        </li>
    );

}

export default Tag
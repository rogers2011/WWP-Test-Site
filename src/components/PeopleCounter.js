import styles from '../css/people-counter.module.css'


function PeopleCounter(props) {

    function musicCheckBoxClicked() {

    }

    return (
        <div>
            <div id="bottom_sub_container">
                <img id="meditation_count_icon"></img>
                <b>
                    {/* <!-- add _animtated to the id animate the number --> */}
                    <p id="meditation_count" className="dropbtn">
                    </p>
                </b>
            </div>
            <div id="dropdown_id" className="dropdown">
                <div className="dropdown-content-container">
                    <div id="meditators_list_show" className="dropdown-content">
                        <div id="meditation_title_div_container_container">
                            <div id="meditation_title_div_container">
                                <div id="meditation_title_div">
                                    <div id="meditation_title">
                                        World Wide Prayer
                    </div>
                                    <label id="musicCheckBoxContainer" className="container" onClick={musicCheckBoxClicked}>Music
                      <input id="musicCheckBox" type="checkbox" checked="checked"></input>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default PeopleCounter

import Tag from './Tag'

function DefaultTagsContainer(props) {

    function removeAddedTag(tag) {

    }


    var openSideNavs = false;
    var snackbarMessage = document.createElement('div');

    function addTag(event, addDefaultTagButton) {
        if (addDefaultTagButton) {

            if (!openSideNavs) {
                openSideNavs[0] = 'INTENTIONS';
            }

            // console.log('addDefaultTagButton', addDefaultTagButton);
            // console.log('addDefaultTagButton.childNodes', addDefaultTagButton.childNodes);
            // console.log('addDefaultTagButton.childNodes[1]', addDefaultTagButton.childNodes[1]);
            // console.log('addDefaultTagButton.parentElement', addDefaultTagButton.parentElement);
            // console.log('addDefaultTagButton.parentElement.parentElement', addDefaultTagButton.parentElement.parentElement);

            var addedTagButtons;
            if (openSideNavs[openSideNavs.length - 1] == 'INTENTIONS') {
                addedTagButtons = document.querySelectorAll('#intentionsSideNav .added_tag_button');
            } else if (openSideNavs[openSideNavs.length - 1] == 'TESTIMONIALS') {
                addedTagButtons = document.querySelectorAll('#testimonialsSideNav .added_tag_button');
            } else if (window.location.href.includes('cast-pearls') || window.location.href.includes('create-prayer-room')) {
                addedTagButtons = document.querySelectorAll('.grid-item .added_tag_button');
            }
            if (addedTagButtons.length >= 30) {
                snackbarMessage.innerHTML = "You can only have up to 30 tags!";
                snackbarMessage.className = "show";
                setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                return;
            }
            // don't add the tag if it's already been added
            for (var i = 0; i < addedTagButtons.length; i++) {
                // console.log('addedTagButtons[i].innerHTML:', addedTagButtons[i].innerHTML.substring(0, addedTagButtons[i].innerHTML.lastIndexOf(' X')),
                // 'addDefaultTagButton.childNodes[1].innerHTML:', addDefaultTagButton.childNodes[1].innerHTML);
                if (addedTagButtons[i].innerHTML.substring(0, addedTagButtons[i].innerHTML.lastIndexOf(' X')) == addDefaultTagButton.childNodes[1].innerHTML) {
                    return;
                }
            }

            var addedTagButton = document.createElement('button');
            addedTagButton.innerHTML = addDefaultTagButton.childNodes[1].innerHTML + ' X';
            addedTagButton.className = 'added_tag_button';

            // var xElement = document.createElement('div');
            // xElement.innerHTML = 'X';

            var addedTagButtonContainer = document.createElement('div');
            addedTagButtonContainer.className = 'added_tag_button_container';
            addedTagButtonContainer.appendChild(addedTagButton);
            // addedTagButtonContainer.appendChild(xElement);
            addedTagButtonContainer.onclick = function () { removeAddedTag(this) }

            // console.log(openSideNavs[openSideNavs.length - 1]);
            // var containerElement = addDefaultTagButton.parentElement.parentElement.parentElement.parentElement;
            var containerElement;
            if (openSideNavs[openSideNavs.length - 1] == 'INTENTIONS') {
                containerElement = document.querySelector("#intentionsSideNav #addedTagsContainer");
            } else if (openSideNavs[openSideNavs.length - 1] == 'TESTIMONIALS') {
                containerElement = document.querySelector("#testimonialsSideNav #addedTagsContainer");
            } else if (window.location.href.includes('cast-pearls') || window.location.href.includes('create-prayer-room')) {
                containerElement = document.querySelector(".grid-item #addedTagsContainer");
            }
            containerElement.insertBefore(addedTagButtonContainer, containerElement.firstChild)

            event.target.value = '';
        }
    }

    function onKeyPressAddingTag(event) {
        // console.log(event);
        if (event.keyCode == 13) { // if the user hit enter

            var addedTagButtons;
            if (openSideNavs[openSideNavs.length - 1] == 'INTENTIONS') {
                addedTagButtons = document.querySelectorAll('#intentionsSideNav .added_tag_button');
            } else if (openSideNavs[openSideNavs.length - 1] == 'TESTIMONIALS') {
                addedTagButtons = document.querySelectorAll('#testimonialsSideNav .added_tag_button');
            } else if (window.location.href.includes('cast-pearls') || window.location.href.includes('create-prayer-room')) {
                addedTagButtons = document.querySelectorAll('.grid-item .added_tag_button');
            }

            if (addedTagButtons.length >= 30) {
                snackbarMessage.innerHTML = "You can only have up to 30 tags!";
                snackbarMessage.className = "show";
                setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);
                return;
            }

            if (event.target.value.includes(',') || event.target.value.includes('[') ||
                event.target.value.includes(']') || event.target.value.includes(':') ||
                event.target.value.includes('\\/') || event.target.value.includes('\\')) {
                snackbarMessage.innerHTML = "The tag cannot contain ',', '[', ']', '\\', '\\/', or ':'.";
                snackbarMessage.className = "show";
                setTimeout(function () { snackbarMessage.className = snackbarMessage.className.replace("show", ""); }, 3000);

                return;
            }

            // don't add the tag if it's already been added
            for (var i = 0; i < addedTagButtons.length; i++) {
                // console.log('addedTagButtons[i].innerHTML:', addedTagButtons[i].innerHTML.substring(0, addedTagButtons[i].innerHTML.lastIndexOf(' X')),
                // 'addDefaultTagButton.childNodes[1].innerHTML:', addDefaultTagButton.childNodes[1].innerHTML);
                if (addedTagButtons[i].innerHTML.substring(0, addedTagButtons[i].innerHTML.lastIndexOf(' X')) == event.target.value) {
                    return;
                }
            }

            var addedTagButton = document.createElement('button');
            addedTagButton.innerHTML = event.target.value + ' X';
            addedTagButton.className = 'added_tag_button';

            var addedTagButtonContainer = document.createElement('div');
            addedTagButtonContainer.className = 'added_tag_button_container';
            addedTagButtonContainer.appendChild(addedTagButton);
            addedTagButtonContainer.onclick = function () { removeAddedTag(this) }

            var containerElement;
            console.log(openSideNavs[openSideNavs.length - 1]);
            if (openSideNavs[openSideNavs.length - 1] == 'INTENTIONS') {
                containerElement = document.querySelector("#intentionsSideNav #addedTagsContainer");
            } else if (openSideNavs[openSideNavs.length - 1] == 'TESTIMONIALS') {
                containerElement = document.querySelector("#testimonialsSideNav #addedTagsContainer");
            } else if (window.location.href.includes('cast-pearls') || window.location.href.includes('create-prayer-room')) {
                containerElement = document.querySelector(".grid-item #addedTagsContainer");
            }
            containerElement.insertBefore(addedTagButtonContainer, containerElement.firstChild)

            event.target.value = '';
        }
    }

    return (
        <div>
            <div id='addedTagsContainer'></div>

            <div className="intention_tag_input_container">
                <input type="text" name="intention_tag_input" placeholder="Add tag..." autoComplete="off" maxLength="30" onKeyPress={onKeyPressAddingTag} />
                <br />
            </div>

            <div className="checkbox_list_container_2">
                <div className="checkbox_list_container_1">
                    <ul className="checkbox_list">

                        <Tag onClick={addTag(this)} text="Health/Healing" />
                        <Tag onClick={addTag(this)} text="Situation" />
                        <Tag onClick={addTag(this)} text="Spiritual" />
                        <Tag onClick={addTag(this)} text="Mental" />
                        <Tag onClick={addTag(this)} text="Physical" />
                        <Tag onClick={addTag(this)} text="Saving" />
                        <Tag onClick={addTag(this)} text="Political" />
                        <Tag onClick={addTag(this)} text="Family" />
                        <Tag onClick={addTag(this)} text="Friend" />
                        <Tag onClick={addTag(this)} text="Educational" />
                        <Tag onClick={addTag(this)} text="Other" />

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DefaultTagsContainer
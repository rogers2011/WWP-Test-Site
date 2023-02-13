
import { useState } from 'react'
import ContactUsModal from './ContactUsModal'

function ContactUsButton(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    function toggleContactUsPopupHandler() {
        modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true)
    }

    return (
        <div>
            <div id="email_us_button" onClick={toggleContactUsPopupHandler}>See Something Wrong?</div>

            {modalIsOpen && <ContactUsModal />}

        </div>
    );

}

export default ContactUsButton
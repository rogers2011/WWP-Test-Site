

function ScrollToWorldWidePrayer(props) {

    function scrollToWorldWidePrayerHandler() {
        document.getElementById("top_of_homepage_except_menu_and_links").scrollIntoView();
    }

    return (
        <div id="scrollToWorldWidePrayer" onClick={scrollToWorldWidePrayerHandler}>
            Worldwide Prayer
        </div>
    );

}

export default ScrollToWorldWidePrayer
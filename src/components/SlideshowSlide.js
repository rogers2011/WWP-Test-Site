

function SlideshowSlide(props) {

    return (

        // /* <!-- Full-width images with number and caption text --> */ 
        < div className="mySlides fade" >
            <div className="numbertext">{props.numbertext} / 9</div>
            <div className="slide_image" style={"background-image: url(" + props.slide_image + ")"}></div>
            {/* <!-- <div className="text">Caption Three</div> --> */ }
        </div >

    );
}

export default SlideshowSlide
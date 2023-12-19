import './slider.css'
const Slider = () => {
    return ( 
        <>
        <div className='wrapper-slider'>
            <div className='slider-offer'>
                <div className='slider-left'>
                    <img src={'../img/slider/slider-logo.png'} className='slider-logo'/>
                   <h2 className='slider-title'><span>Stan Smith</span>,<br/> Forever!</h2>
                   <button className="button-buy">Придбати</button>
                </div>
                <div className='slider-right'>
                <img src={'../img/slider/slider-arrow.png'} className='slider-arrow'/>
                <img src={'../img/slider/slider-image.png'} className='slider-image' />

                </div>
            </div>
            </div>
        </>
     );
}
 
export default Slider;





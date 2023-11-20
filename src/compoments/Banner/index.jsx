function Banner(props) {
    
    return (
            <div className='divbanner'>
                <img src={props.imgsrc} alt={props.altbanner} />
                <h1>{props.titreh1}</h1>
            </div>
    )
}

export default Banner
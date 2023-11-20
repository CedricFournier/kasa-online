import stargrey from '../../assets/star_grey.svg'
import starred from '../../assets/Star_red.svg'

function Rating(props) {
    const range = [1, 2, 3, 4,5]

    return (
      <div className='divrating'>
        {range.map((rangeElem, index) =>
        props.rating >= rangeElem ? <img key={index} src={starred} alt="Note" /> : <img key={index} src={stargrey} alt="Note" />
        )}
      </div>
    )
  }
  
  export default Rating
import { useState } from 'react'
import tablogement from '../../datas/listelogement.json';
import arrowleft from '../../assets/arrow_left.svg';
import arrowright from '../../assets/arrow_right.svg';

function Carrousel(props) {
    const logementitem = tablogement.find((item) => item.id === props.id)
    const lengarray = logementitem.pictures.length
    const [count, setCount] = useState(1)

    function oneelement () {
      if (lengarray === 1) {
        return {
          display: 'none',
        };
      }
  
    }
    
    function sliderleft () {
        setCount(count === 1 ? lengarray : count -1)
    }

    function slideright () {
        setCount(count === lengarray ? 1 : count +1)
    }

    return (
      <div className='divcarrousel'>
        <img className='imgcarrousel' src={logementitem.pictures[count - 1]} alt = "Vue intérieur de l'appartement" />
        <img className='imgleft' style={oneelement()} src={arrowleft} alt='Fléche gauche' onClick={() => sliderleft ()} />
        <img className='imgright' style={oneelement()} src={arrowright} alt='Fléche droite' onClick={() => slideright ()} />
        <p className='counter' style={oneelement()}>{count}/{lengarray}</p>
      </div>
    )
  }
  
  export default Carrousel
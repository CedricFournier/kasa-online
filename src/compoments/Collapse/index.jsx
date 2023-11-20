import { useRef, useState } from 'react'
import arrowtop from '../../assets/arrow_top.svg'

function Collapse(props) {
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open);
      };

      const contentRef = useRef();
      

    return (
        <article className='articlecollapse'>
            <div className='closecollapse'>
                <p>{props.titre}</p>
                <button className={`btncollapse ${open ? "btncolopen" : "btncolclose"}`} onClick={toggle}>
                    <img src={arrowtop} alt="Fléche haut" />
                </button>
            </div>
            <div className="toggle-parent" ref={contentRef} style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }}>
                <div className="toggle">{props.content}</div>
            </div>
        </article>
    )
  }
  
  export default Collapse
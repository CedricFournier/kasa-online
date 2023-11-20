import tablogement from '../../datas/listelogement.json';
import Collapse from '../Collapse';
import Rating from '../Rating';

function Infologement(props) {
    const logementitem = tablogement.find((item) => item.id === props.id)

    return (
        <section className='sectioninfolog'>
            <div className='divinfo'>
                <div>
                    <h1 className='h1info'>{logementitem.title}</h1>
                    <p className='locationinfo'>{logementitem.location}</p>
                    <div className='divtag'>
                    {logementitem.tags.map((tags, index) => (
                        <p key={index}>{tags}</p>
                    ))}
                    </div>
                </div>
                <div className='divrathost'>
                    <div className='divhost'>
                        <p>{logementitem.host.name}</p>
                        <img src={logementitem.host.picture} alt="Propriétaire" />
                    </div>
                    <Rating rating={logementitem.rating} />
                </div>
            </div>
            <div className='divcolinfo'>
                <Collapse titre="Description" content={<p>{logementitem.description}</p>} />
                <Collapse titre="Équipements" content={logementitem.equipments.map((equipement, index) => (
                    <p key={index}>{equipement}</p>
                ))} />
            </div>
        </section>
    )
}

export default Infologement;
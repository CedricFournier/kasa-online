import tablogement from '../../datas/listelogement.json';
import { Link } from 'react-router-dom'

function Listelogement() {

    return (
        <section className='sectionitemlog'>
            {tablogement.map((logement) => (
                <article key={logement.id}>
                    <Link to={`/Logement/${logement.id}`}>
                        <h2>{logement.title}</h2>
                        <div>
                            <img src={logement.cover} alt={logement.title} />
                        </div>
                    </Link>
                </article>
            ))}
        </section>
    )
}

export default Listelogement;
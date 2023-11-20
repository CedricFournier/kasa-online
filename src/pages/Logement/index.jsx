import { useParams, Navigate } from 'react-router-dom'
import Carrousel from '../../compoments/Carrousel';
import Infologement from '../../compoments/Infologement';
import tablogement from '../../datas/listelogement.json';

function Logement() {
  const { id } = useParams()
  const logementitem = tablogement.find((item) => item.id === id)
  
  if (!logementitem) {
    return <Navigate to="/Error" />;
  } return ( 
            <main>
              <Carrousel id={logementitem.id} />
              <Infologement id={logementitem.id} />
            </main>
    )          
}
  
  export default Logement
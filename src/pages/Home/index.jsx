import Banner from '../../compoments/Banner'
import Listelogement from '../../compoments/Listelogement'
import imgsea from '../../assets/Imagesource1.png'

function Home() {
    return  <main>
              <Banner imgsrc={imgsea} altbanner="Paysage de falaise" titreh1="Chez vous, partout et ailleurs"/>
              <Listelogement />
            </main>
  }
  
export default Home
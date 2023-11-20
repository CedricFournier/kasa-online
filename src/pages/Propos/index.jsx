import Banner from '../../compoments/Banner'
import Collapse from '../../compoments/Collapse'
import imgmontagne from '../../assets/Imagesource2.png'
import tabapropos from '../../datas/data_apropos.json'

function Propos() {
  return  <main>
            <Banner imgsrc={imgmontagne} altbanner="Paysage de montagne"/>
            <section className='collapsepropos'>
            {tabapropos.map((propos, index) => (
              <Collapse key={index} titre={propos.title} content={<p>{propos.content}</p>} />
            ))}
            </section>
          </main>
}
  
  export default Propos
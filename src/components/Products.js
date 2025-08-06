import one from "./images/one.jpg"
import two from "./images/two.jpeg"
import three from "./images/three.jpg"


//Product Component
function Products(){
return(
  <div className="products">
  <div className="box">
    <img src={one} alt="img1" />
    <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
  </div>
   <div className="box">
    <img src={two} alt="img2" />
    <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
  </div>
   <div className="box">
    <img src={three} alt="img3" />
    <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
  </div>
</div> 

)


}

export default Products

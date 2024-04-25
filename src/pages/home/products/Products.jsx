import { useDispatch, useSelector } from "react-redux";
import { toggleToWishes } from "../../../context/wishlistSlice";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { addToCart } from "../../../context/cartSlice";
import rass1 from "../../../assets/Fill-Eye.png"


export const Products = ({ data, title }) => {
  const dispatch = useDispatch()
  const wishes = useSelector( state => state.wishlist.value)
  
    let products = data?.map((el) => (
      <div key={el.id} className="products-s1">
          <div className="all-products">
            <div className="product1">
              <div className="allpictureproduct">
                <div className="images-product">
                  {/* <div className="price-off">
                    <p>-40%</p>
                  </div> */}
                  <div className="productpicture">
      <img src={el.images[0]} alt="" /> 

                  </div>
                  <div className="detail-wishlist">
                    <a title="Add To Wish List" href="#"> 
                     <img src={rass1} alt="" />
                    </a> 
                    <a onClick={()=> dispatch(toggleToWishes(el))} title="View Detail" href="#">
                     
                    {
          wishes.some(w => w.id === el.id) ? 
          <FaHeart/> :
          <FaRegHeart/>
        }

                    </a>
                  </div>
                </div>
                <div  className="AddToCart">
                  <a  onClick={()=> dispatch(addToCart(el))}>Add To Cart</a>
                </div>
              </div>

              <div className="product-details">
                <h3>{el.title}</h3>
                <p className="pricing">
                ${el.price}  <del>${el.price}</del>
                </p>
                <a className="rating" href="#">
                  {/* <img src="./img/Fivestar.png">(88) */}
                </a>
              </div>
            </div>
          </div>
        </div>
    
  ));
  return (
    <div className="container">
      <h2>{title}</h2>
      <div className="wrapper">{products}</div>
    </div>
  );
};

export default Products;

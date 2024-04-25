import { useEffect, useState } from "react";
import axios from "../../api";
import Products from "./products/Products";
import "./home.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import ras from "../../assets/DropDownright.svg";
import ras1 from "../../assets/applelogo.png";
import ras2 from "../../assets/arrow-right.svg";
import ras3 from "../../assets/14ProMax.png";
import ras4 from "../../assets/PS5logo.jpg";
import ras5 from "../../assets/arrow-right.svg";
import ras6 from "../../assets/ps5-offer.png";
import ras7 from "../../assets/macbook.png";
import ras8 from "../../assets/right-row.png";
import ras9 from "../../assets/left-row.png";
import ras10 from "../../assets/back-home.png";
import ras11 from "../../assets/BOOMBOX.png";
import rass1 from "../../assets/Fill-Eye.png"

import { useDispatch, useSelector } from "react-redux";
import { toggleToWishes } from "../../context/wishlistSlice";

export const Home = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(4);
  const wishes = useSelector( state => state.wishlist.value)
  const dispatch = useDispatch()



  useEffect(() => {
    axios
      .get(`/products?limit=${count}`)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);



  let produ = data?.map((el) => (
    <div key={el.id} className="product3 1">
            <div className="allpictureproduct">
              <div className="images-product">
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
              <div className="AddToCart">
                <a href="#">Add To Cart</a>
              </div>
            </div>

     

            <div className="product-details">
              <h3>Breed Dry Dog Food</h3>
              <div className="price">
                <p className="our-product-pricing">$100</p>
                <a className="rating" href="#">
                  {/* <img src="./img/Three-Star.png">(35) */}
                </a>
              </div>
            </div>
          </div>
  
));

let produc = data?.map((el) => (
  <div key={(el.id)} className="product3 7">
  <div className="allpictureproduct">
    <div className="images-product">
      <div className="price-off new">
        <p>New</p>
      </div>
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
    <div className="AddToCart">
      <a href="#">Add To Cart</a>
    </div>
  </div>

  <div className="product-details">
    <h3>Kids Electric Car</h3>
    <div className="price">
      <p className="our-product-pricing">$960</p>
      <a className="rating" href="#">
        {/* <img src="./img/Fivestar.png">(65) */}
      </a>
    </div>
    <button className="choose-color-first"></button>
    <button className="choose-color-second"></button>
  </div>
</div>
));
  return (
    <div className="container">
      <div className="section1">
        <div className="sidebar">
          <ul className="balck-list">
            <div className="womendropdown">
              <li className="dropbtn">
                Woman's Fashion <img src={ras} alt="" />
              </li>
              <div className="womenfashion">
                <a href="#">Culotte dress</a>
                <a href="#">Babydoll dress</a>
                <a href="#">Kimono dress</a>
              </div>
            </div>
            <div className="mendropdown">
              <li className="dropbtn">
                Men's Fashion <img src={ras} alt="" />
              </li>
              <div className="menfashion">
                <a href="#">Sweater</a>
                <a href="#">Shirt</a>
                <a href="#">Jeans</a>
              </div>
            </div>

            <li>
              <a href="#">Electronics</a>
            </li>
            <li>
              <a href="#">Home & Lifestyle</a>
            </li>
            <li>
              <a href="#">Medicine</a>
            </li>
            <li>
              <a href="#">Sports & Outdoor</a>
            </li>
            <li>
              <a href="#">Baby's & Toys</a>
            </li>
            <li>
              <a href="#">Groceries & Pets</a>
            </li>
            <li>
              <a href="#">Health & Beauty</a>
            </li>
          </ul>
        </div>

        <div className="offers">
          <div className="offersnumber">
            <div className="AppleOffer">
              <div className="AppleLogo">
                <img src={ras1} alt="" />
                <p>iPhone 14 Series</p>
              </div>
              <div className="AppleDescription">
                <h1>Up to 10% off Voucher</h1>
                <a href="#" class="ShopNow">
                  Shop Now <img src={ras2} alt="" />
                </a>
              </div>
            </div>
            <div className="offers-images">
              <img src={ras3} alt="" />
            </div>
          </div>
          <div className="offersnumber">
            <div className="AppleOffer">
              <div className="AppleLogo">
                <img width={60} src={ras4} alt="" />
                <p>PS5 series</p>
              </div>
              <div className="AppleDescription">
                <h1>Up to 25% off Voucher</h1>
                <a href="#" className="ShopNow">
                  Shop Now <img src={ras5} alt="" />
                </a>
              </div>
            </div>
            <div className="offers-images">
              <img height={300} src={ras6} alt="" />
            </div>
          </div>
          <div className="offersnumber">
            <div className="AppleOffer">
              <div className="AppleLogo">
                <img src={ras1} alt="" />
                <p>MacBook Pro Series</p>
              </div>
              <div className="AppleDescription">
                <h1>Up to 20% off Voucher</h1>
                <a href="#" class="ShopNow">
                  Shop Now <img src={ras2} alt="" />
                </a>
              </div>
            </div>
            <div className="offers-images">
              <img width={500} height={300} src={ras7} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="bestt">
          <div className="Offer-timer">
            <div className="this-month">
              <div></div>
              <p>This Month</p>
            </div>
            <div className="Best-Selling">
              <h3>Best Selling Products</h3>

              <div className="ViewAll">
                <button>View All</button>
              </div>
            </div>
          </div>
        </div>

        <a className="back-home" href="#">
          <img src={ras10} alt="" />
        </a>

        <div className="cart__wrapper">
          <Products title={"Yangi mahsulotlar"} data={data} />
        </div>

        <div className="ViewAllProduct">
          <button>View All Products</button>
        </div>
      </div>
      <hr></hr>

      <div className="section5">
        <div className="">
        
       
        </div>

        <div className="offerdetail">
          <p className="offer-categories">Categories</p>
          <h2>Enhance Your Music Experience</h2>
          <div className="time">
            <div>
              <p>23</p>
              <p>Hours</p>
            </div>
            <div>
              <p>05</p>
              <p>Days</p>
            </div>
            <div>
              <p>59</p>
              <p>Minutes</p>
            </div>
            <div>
              <p>35</p>
              <p>Seconds</p>
            </div>
          </div>
          <button>Buy Now!</button>
        </div>
        <div className="product-photo">
          <img src={ras11} alt="" />
        </div>
      </div>

      <div className="bestt ">
      <div className="Offer-timer">
            <div className="OurProduct">
              <div></div>
              <p>Our Products</p>
            </div>
            <div className="Explore-Our-Products">
              <h3>Explore Our Products</h3>

              <div className="scroll-products">
                <button>
                  <img src={ras8} alt="" />
                </button>
                <button>
                  <img src={ras9} alt="" />
                </button>
              </div>
            </div>
          </div>
      </div>

      <div className="all-our-products">
        <div className="our-products-first-line">
           {produ}
        </div>

        <div className="our-products-secound-line">
        {produc}
        </div>
        <div className="ViewAllProduct">
          <button>View All Products</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

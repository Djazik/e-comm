import { NavLink } from "react-router-dom"
import "./cart.css"
// import { useSelector, useDispatch } from 'react-redux'
// import { incCart,decCart,removeFromCart,clearCart } from "../../context/cartSlice"
// import {FaRegTrashCan } from "react-icons/fa6";



 export const Cart = () => {
    // let carts = useSelector(state => state.cart.value)
    // let dispatch = useDispatch()
   
    // const handleDecrement = (el)=>{
    //  if(el.quantity <= 1){
    //    dispatch(removeFromCart(el))
    //  }else {
    //    dispatch(decCart(el))
    //  }
    // }
//      let items = data?.map((el)=>(
//         <div key={el.id} className="container">
//         <div className="container">
//            <span><a href="./HomePage.html">Home / </a><a href="#"><b>Cart</b></a></span>
//            <div className="my-product"> 
//                <div className="thead">
//                    <p>Product</p>
//                    <p>Price</p>
//                    <p>Quantity</p>
//                    <p>Subtotal</p>
//                </div>
//                <div className="tbody1">
//                    <div className="product-in-cart1">
//                     <img src={el.image[0]} alt="" />
//                        {/* <img width="50px" src="./img/ecron.png"> */}
//                        <p>LCD Monitor</p>
//                    </div>
//                    <p>{el.price}</p>
//                    <input type="number" min={1} onClick={()=> dispatch(incCart(el))}/>
//                </div>
//                <div className="tbody2">
//                    <div className="product-in-cart2">
//                        {/* <img width="50px" src="./img/playercontrol.png"> */}
//                        <p>LCD Monitor</p>
//                    </div>
//                    <p>$550</p>
//                        <input type="number" min={1} onClick={()=> dispatch(clearCart(el))} />
//                    <p>$1100</p>
//                </div>
//                <div className="return-update">
//                    <button>Return To Shop</button>
//                    <button>Update Cart</button>
//                </div>
//                <div className="checkout">
//                    <div className="coupon-code">
//                        <input type="text"  placeholder="Coupon Code"/>
//                        <button>Apply Coupon</button>
//                    </div>
//                    <div className="cart-total">
//                        <h3>Cart Total</h3>
//                        <div className="subtotal">
//                            <p>Subtotal:</p>
//                            <p>$1750</p>
//                        </div>
//                        <div className="shipping">
//                            <p>Shipping:</p>
//                            <p>Free</p>
//                        </div>
//                        <div>
//                            <p>Total</p>
//                            <p>$1750</p>
//                        </div>
//                        <a href="./CheckOut.html">Process To Checkout</a>
//                    </div>
//                </div>
//            </div>
//        </div>
       
//    </div>
//          ))
  return (
    <div className="container">
    <span><a href="./HomePage.html">Home / </a><a href="#"><b>Cart</b></a></span>
    <div className="my-product"> 
        <div className="thead">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
        </div>
        <div className="tbody1">
            <div className="product-in-cart1">
             {/* <img src={el.image[0]} alt="" /> */}
                {/* <img width="50px" src="./img/ecron.png"> */}
                <p>LCD Monitor</p>
            </div>
            <p></p>
            <input type="number" min={1} />
        </div>
        <div className="tbody2">
            <div className="product-in-cart2">
                {/* <img width="50px" src="./img/playercontrol.png"> */}
                <p>LCD Monitor</p>
            </div>
            <p>$550</p>
                <input type="number" min={1}  />
            <p>$1100</p>
        </div>
        <div className="return-update">
            <button>Return To Shop</button>
            <button>Update Cart</button>
        </div>
        <div className="checkout">
            <div className="coupon-code">
                <input type="text"  placeholder="Coupon Code"/>
                <button>Apply Coupon</button>
            </div>
            <div className="cart-total">
                <h3>Cart Total</h3>
                <div className="subtotal">
                    <p>Subtotal:</p>
                    <p>$1750</p>
                </div>
                <div className="shipping">
                    <p>Shipping:</p>
                    <p>Free</p>
                </div>
                <div>
                    <p>Total</p>
                    <p>$1750</p>
                </div>
                <NavLink to={"/chackout"}>Process To Checkout</NavLink>

            </div>
        </div>
    </div>
    {/* <div> {items}</div> */}
</div>
   
  )
}

export default Cart
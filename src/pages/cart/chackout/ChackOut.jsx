import { NavLink } from "react-router-dom"
import "./chackout.css"
export const ChackOut = () => {
  return (
    <div>
         <div className="container">
        
        <span> <NavLink to={"/home"}>Home /</NavLink>
         <NavLink to={"/Account"}>My Account /</NavLink>
         <NavLink to={"/products"}>Product /</NavLink>
         <NavLink to={"/cart"}>View Cart /</NavLink>
         <NavLink to={"#"}>CheckOut</NavLink>
         </span>
        <h1>Billing Details</h1>
        <div className="checkout">
            <div class="customer-info">
                <label for="firstname">First Name</label>
                    <input type="text" />
                <label for="company-name">Company Name</label>
                    <input type="text" />
                <label for="Street">Street address</label>
                <input type="text" />

                <label for="Apartment">Apartment, floor, etc. (optional)</label>
                <input type="text" />
                <label for="Town">Town/City</label>
                
                <input type="text" />

                <label for="Phone-number">Phone Number</label>
                <input type="text" />

                <label for="email">Email Address</label>
                <input type="text" />

                <div className="checkbox">
                    {/* <input type="checkbox" id="checkbox" name="checkbox" value="1">
                    <label for="checkbox">Save this information for faster check-out next time</label> */}
                </div>
            </div>
            <div className="checkout-info">
                <div className="product1-detail">
                    <div className="product1">
                        {/* <img width="50px" src="./img/playercontrol.png"> */}
                        <p>LCD Monitor</p>
                    </div>
                    <p>$650</p>
                </div>
                <div className="product2-detail">
                    <div className="product2">
                        {/* <img width="50px" src="./img/ecron.png"> */}
                        <p>LCD Monitor</p>
                    </div>
                    <p>$1100</p>
                </div>
                <div className="cart-total">
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
                </div>
                <div className="pay-method">
                    <div className="bank-type">
                        <div className="pay-by-bank">
                            {/* <input type="radio" id="bank" name="pay" value="bank"> */}
                            <label for="bank">Bank</label>
                        </div>
                        <label for="bank">
                            {/* <img src="./img/bank-type.png"> */}

                            </label>
                    </div>
                    <div className="cash-on-delivery">
                        {/* <input type="radio" id="CashOnDelivery" name="pay" value="CashOnDelivery" checked> */}
                        <label >Cash On Delivery</label>
                    </div>
                </div>
                <div className="coupon-code">
                    {/* <input type="text" placeholder="Coupon Code"> */}
                    <button>Apply Coupon</button>
                </div>
                <button id="place-order">Place Order</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ChackOut
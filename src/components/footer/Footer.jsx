import rasm from "../../assets/sendIcon.png"
import rasm1 from "../../assets/Qr-Code.png"
import rasm2 from "../../assets/GooglePlay.png"
import rasm3 from "../../assets/AppStore.png"
import rasm4 from "../../assets/Icon-Facebook.svg"
import rasm5 from "../../assets/instagramicon.png"
import rasm6 from "../../assets/Icon-Twitter.png"
import rasm7 from "../../assets/linkdenicon.png"
import rasm8 from "../../assets/icon-copyright.png"

export const Footer = () => {
  return (
    <div>
       <footer>
        <div className="footer-information">

            <div className="subscibe">
                <ul className="white-list">
                    <li><a href="#"><h1>Exclusive</h1></a></li>
                    <li><a href="#">Subscribe</a></li>
                    <li>Get 10% off your first order</li>
                </ul>
                <div className="footeremail">
                      <input type="email" placeholder="enter your email" />
                      <img src={rasm} alt="" />

                </div>
            </div>

            <div className="support">
                <ul className="white-list">
                    <li><a href="#"><h2>Support</h2></a></li>
                    <li><a href="#">111 Bijoy sarani, Gahka, DH 1515, Bangladesh</a></li>
                    <li><a href="#">exclusive@gmail.com</a></li>
                    <li><a href="#">+88015-99999-8888</a></li>
                </ul>
            </div> 

            <div className="account">
                <ul className="white-list">
                    <li><a href="#"><h2>Account</h2></a></li>
                    <li><a href="./Account.html">My Acount</a></li>
                    <li><a href="./Sign-Up.html">Login / Register</a></li>
                    <li><a href="./cart.html">Cart</a></li>
                    <li><a href="./Wishlist.html">Wishlist</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
            </div>

            <div className="quick-link">
                <ul className="white-list">
                    <li><a href="#"><h2>Quick Link</h2></a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms Of Use</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="./contact.html">Contact</a></li>
                </ul>
            </div>

            <div className="download-app">
                <h2>Download App</h2>
                <p>save $3 with App New User Only</p>
                <div className="download">

                    <div className="QR-Code">
                          <img src={rasm1} alt="" />
                    </div>

                    <div className="App-store"> 
                        <a href="#">
                          <img src={rasm2} alt="" />
                        </a>
                        <a href="#">
                          <img src={rasm3} alt="" />
                        </a>
                    </div>
                </div>
                    <a className="social" href="#">
                      <img src={rasm4} alt="" />
                    </a>
                    <a className="social" href="#">
                    <img src={rasm5} alt="" />

                    </a>
                    <a className="social" href="#">
                    <img src={rasm6} alt="" />

                    </a>
                    <a className="social" href="#">
                    <img src={rasm7} alt="" />
                      </a>
            </div>
        </div>

        <div className="copyright">
            <img src={rasm8} alt="" />
            <p>Copyright Rimel 2022. All right reserved</p>
        </div>

    </footer>
    </div>
  )
}

export default Footer
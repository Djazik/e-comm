import { useSelector } from "react-redux"
import Products from "../home/products/Products"

export const Wishlists = () => {
    const wishes = useSelector(state => state.wishlist.value)
    console.log(wishes)
  return (
    <>
        <Products title={"Wishlist"} data={wishes}/>
    </>
  )
}

export default Wishlists
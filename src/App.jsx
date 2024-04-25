import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Wishlists } from './pages/wishlist'
import Cart from './pages/cart/Cart'
import { ChackOut } from './pages/cart/chackout/ChackOut'


function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>} />
          <Route path='wishlist' element={<Wishlists/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='chackout' element={<ChackOut/>} />
        </Route>
     </Routes>
    </>
  )
}

export default App

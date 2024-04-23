import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Wishlists } from './pages/wishlist'


function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/wishlist' element={<Wishlists/>} />
        </Route>
     </Routes>
    </>
  )
}

export default App
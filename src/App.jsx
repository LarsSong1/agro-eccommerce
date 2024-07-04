

import Home from './Pages/Home/Home'
import NotFound from './Pages/Errors/notFound'
import { Route, Outlet, BrowserRouter, createBrowserRouter, RouterProvider, createRoutesFromElements, ScrollRestoration } from 'react-router-dom'
import { AuthProvider } from './context/AutContext'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer'
import Drawer from './shared/drawer'
import { DrawerProvider } from './context/DrawerContext'
import Contact from './Pages/Contact/Contact'
import Shop from './Pages/Shop/Shop'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import PayData from './Pages/PayData/PayData'
import { CategoryProvider } from './context/CategoryContext'
import { Toaster } from 'sonner'
import { DataProvider } from './context/DataContext'
import Cart from './Pages/Cart/Cart'
import CartDrawer from './shared/cartDrawer'
import { CartProvider } from './context/CartContext'
import Profile from './Pages/Profile/Profile'
import ProfileContext, { ProfileProvider } from './context/ProfileContext'
import Dashboard from './Pages/Dashboard/Dashboard'
import { useContext } from 'react'
import ProtectedRoute from './components/protectedRoute'




const Layout = () => {
  const { profileData } = useContext(ProfileContext)

  
  return (
    <>
      <AuthProvider>
        <DataProvider>
          <ProfileProvider>
            <CartProvider>
              <CategoryProvider>
                <DrawerProvider>
                  <section className='max-w-[1920px] mx-auto relative flex flex-col items-center'>

                    <Drawer />
                    <CartDrawer />
                    <Navbar />
                    <Outlet />
                    <ScrollRestoration />
                    <Footer />
                    <Toaster position='top-right' expand visibleToasts={2} duration={1500} />

                  </section>
                </DrawerProvider>
              </CategoryProvider>
            </CartProvider>
          </ProfileProvider>
        </DataProvider>
      </AuthProvider>
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/products/:productId' element={<ProductDetail />}></Route>
        <Route path='/pay' element={<PayData />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route> 
    </Route>
  )
)


function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

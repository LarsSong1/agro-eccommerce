

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




const Layout = () => {
  return (
    <>
      <AuthProvider>
        <DataProvider>
          <CategoryProvider>
            <DrawerProvider>
              <section className='max-w-[1920px] mx-auto relative flex flex-col items-center'>

                <Drawer />
                <Navbar />
                <Outlet />
                <ScrollRestoration />
                <Footer />
                <Toaster position='top-right' expand visibleToasts={1} />

              </section>
            </DrawerProvider>
          </CategoryProvider>
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
        <Route path='/product_detail/:product_id' element={<ProductDetail />}></Route>
        <Route path='/pay' element={<PayData />}></Route>
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

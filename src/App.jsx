

import Home from './Pages/Home/Home'
import NotFound from './Pages/Errors/notFound'
import { Route, Outlet, BrowserRouter, createBrowserRouter, RouterProvider, createRoutesFromElements, ScrollRestoration } from 'react-router-dom'
import { AuthProvider } from './context/AutContext'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer'



const Layout = () => {
  return (
    <>
      <AuthProvider>
        <section className='max-w-[1920px] mx-auto relative flex flex-col items-center '>
          <Navbar />
          <Outlet />
          {/* <ScrollRestoration /> */}
          <Footer/>

        </section>

      </AuthProvider>
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
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

      {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='*' element={<NotFound />} />
          <Route path='/register' element={<Register/>} />
        </Routes> */}

    </>
  )
}

export default App

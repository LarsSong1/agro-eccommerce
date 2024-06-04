import { useContext } from "react"
import FormLogin from "./components/formLogin"
import AuthContext from "../../context/AutContext";




function Login() {
  const {user} = useContext(AuthContext)


  return (
    <>
      <section className="grid place-content-center h-[100vh] bg-white">
        <div className="h-[70vh] min-h-[600px]  rounded-lg md:min-w-[400px] min-w-[100%] bg-white flex justify-center items-center  max-w-4xl
        ps-6 pe-6">
          <FormLogin />


        </div>


      </section>



    </>
  )
}

export default Login;
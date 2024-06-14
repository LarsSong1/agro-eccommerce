import { useContext } from "react"
import AuthContext from "../../context/AutContext";
import FormLogin from "./formLogin";




function Login() {
  const { user } = useContext(AuthContext)


  return (
    <>
      <section className="grid place-items-center h-screen  w-full ps-8 pe-8 max-w-md mx-auto relative min-h-[700px]">
        <FormLogin />


      </section>



    </>
  )
}

export default Login;
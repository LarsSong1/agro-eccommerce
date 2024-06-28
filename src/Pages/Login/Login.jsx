import FormLogin from "./formLogin";
import { Toaster } from "sonner";




function Login() {

  return (
    <>
      <section className="grid place-items-center h-screen  w-full ps-8 pe-8 max-w-md mx-auto relative min-h-[700px]">
        <Toaster position='top-right' expand visibleToasts={2} duration={1500} />
        <FormLogin />


      </section>



    </>
  )
}

export default Login;
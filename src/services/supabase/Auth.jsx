
import { toast } from "sonner";
import { supabase } from ".";


// Funcion crear usuarios
export const signUp = async (dataForm) => {
   
        let {data, error} = await supabase.auth.signUp(dataForm);
        
        if (error){
            toast.error(`${error.message}`)
            toast('Intenta usando otro correo')
        }else {
            toast.success('Usuario creado')
        }
        return data;
   

}


export const updateProfileUsername = async (data) => {
    try {
        await supabase.from('profiles').upsert(data).select();   
    } catch (err) {
        console.error(err);
    }
}


// Funcion Ingresar credenciales si usaurio ya fue creado
export const signIn = async (data) => {
    try {
        let { data: { user }, error } = await supabase.auth.signInWithPassword(data)


        if (error){
            toast.error(`${error.message}`)
        }else {
            return user
        }
        return user;

    } catch (err) {
        console.error(err)
    }
}


export const logInWithGoogle = async () => {
    const { user, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'http://localhost:5173'
        }
    });
    return user
    if (error) console.error('Error logging in with Google:', error);

}



export const Logout = async () => {
    const { error } = await supabase.auth.signOut();
    // console.log(error)
}




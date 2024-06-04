
import { supabase } from ".";





// Funcion crear usuarios
export const signUp = async (data) => {
    let result = await supabase.auth.signUp(data);
    return result
}


export const updateProfile = async (data) => {
    try {
        await supabase.from('profiles').upsert(data, { returning: 'minimal' })
    } catch (err) {
        console.error(err);
    }
}


// Funcion Ingresar credenciales si usaurio ya fue creado
export const signIn = async (data) => {
    try {
        let { data: {user}} = await supabase.auth.signInWithOtp(data)
    } catch (err) {
        console.error(err)
    }
}


export const logInWithGoogle = async () => {
    const { user, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    });
    return user
    if (error) console.error('Error logging in with Google:', error);

}



export const logout = async () => {
    const { error } = await supabase.auth.signOut();
    console.log(error)
}




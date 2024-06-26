import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';






const AuthContext = createContext({
    user: null,
    profile: null

});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [profile, setProfile] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()



    const checkUser = async () => {

        const { data: { user } } = await supabase.auth.getUser();
        const { data: profileData, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

        if (user) {
            setUser(user.user_metadata);
            setLoading(false)
            navigate('/', { replace: true });
            setProfile(profileData);

        } else {
            setUser(null);
            setLoading(true)
            toast.error('Usuario no encontrado')

        }
    };





    useEffect(() => {


        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if (!session) {
                    setUser(null);
                    setLoading(true);
                    navigate('/login');


                } else {
                    setUser(session.user.user_metadata);
                    setLoading(false)
                    navigate('/', { replace: true });

                }
            }
        );

        checkUser();

        return () => {
            authListener.subscription.unsubscribe();
        };

    }, [])


    return (
        <AuthContext.Provider value={{ user, loading, profile }}>
            {children}
        </AuthContext.Provider>
    )
}



export const AuthUsers = () => {
    return useContext(AuthContext)
}





export default AuthContext;
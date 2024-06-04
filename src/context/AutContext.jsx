import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useNavigate } from "react-router-dom";






const AuthContext = createContext({
    user: null,

});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()



    const checkUser = async () => {

        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            setUser(user.user_metadata);
            navigate('/', {replace: true});
            
           
        } else {
            setUser(null);
          
        }
    };


    useEffect(() => {


        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if (!session) {
                    setUser(null);
                    navigate('/login');
                    
                    
                } else {
                    setUser(session.user.user_metadata);
                    navigate('/', {replace: true});

                }
            }
        );

        checkUser();

        return () => {
            authListener.subscription.unsubscribe();
        };

    }, [])


    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}



export const AuthUsers = () => {
    return useContext(AuthContext)
}





export default AuthContext;
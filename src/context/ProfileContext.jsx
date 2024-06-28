import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";

import { toast } from "sonner";
import AuthContext from "./AutContext";

export const ProfileContext = createContext({
    profileData: null,
    profileId: null,
    updateProfile: () => { }

})


export const ProfileProvider = ({ children }) => {
    const [profileData, setProfileData] = useState(null)
    const [profileId, setProfileId] = useState(null)


    const getProfileData = async (userId) => {


        const { data: profileInfo, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userId)
            .single();


        if (profileError) {
            toast.error('No se obtuvo el perfil')
            setProfileData(null);
        } else {
            setProfileData(profileInfo)
        }




    }


    const updateProfile = async (data) => {
        
        try {
            let { data: profileUpdated, error } = await supabase
                .from('profiles')
                .update(data)
                .eq('id', profileId)
                .select()


            if (error) {
                toast.error('Eror al actualizar los datos')
            } else {
                toast.success('Datos actualizados correctamente')
                console.log(profileUpdated)
                // array 
                setProfileData(profileUpdated[0])
                return profileUpdated[0]
              
            }
        } catch (err) {
            throw new Error(err)
        }
    }


    useEffect(() => {
        const fetchProfileId = async () => {
            const { data: { user }, error } = await supabase.auth.getUser();
            if (user) {
                setProfileId(user.id);
                await getProfileData(user.id);
            }
        };
        fetchProfileId();
    }, [])

    return (
        <ProfileContext.Provider value={{ profileData, updateProfile, profileId }}>
            {children}
        </ProfileContext.Provider>
    )

}


export default ProfileContext
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


    const getProfileData = async () => {
        const { data: { user }, error } = await supabase.auth.getUser();

        if (user) {
            setProfileId(user.id)
        }


        const { data: profileInfo, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', profileId)
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
            let { data: Profile, error } = await supabase
                .from('profiles')
                .update(data)
                .eq('id', profileId)
                .select()


            if (error) {
                toast.error('Eror al actualizar los datos')
            } else {
                setProfileData(Profile)
                toast.success('Datos actualizados correctamente')
              
            }
        } catch (err) {
            throw new Error(err)
        }
    }


    useEffect(() => {
        getProfileData()
    }, [])

    return (
        <ProfileContext.Provider value={{ profileData, updateProfile, profileId }}>
            {children}
        </ProfileContext.Provider>
    )

}


export default ProfileContext
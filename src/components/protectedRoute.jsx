import React, { useContext } from 'react'

import { Navigate } from 'react-router-dom'
import ProfileContext from '../context/ProfileContext'

function ProtectedRoute({ children }) {
    const { profileData } = useContext(ProfileContext)



    if (!profileData) {
        
        return <div>Cargando...</div>;
    }

    if (!profileData.admin) {
        return <Navigate to="*" />;
    }

    return children
}

export default ProtectedRoute
import React from 'react'
import { useAuth } from '../../Context/AuthContext.jsx'

const NavBar = () => {
    const { user } = useAuth()

    return (
        <div className="flex justify-between items-center h-12 bg-white px-4">
            <p className="text-slate-800 font-bold">Glad to have you here, {user.name}!</p>
            
        </div>
    )
}

export default NavBar

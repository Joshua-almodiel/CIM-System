import React from 'react'
import { useAuth } from '../../Context/AuthContext.jsx'

const Summary = () => {
    const {user} = useAuth()


    return (
        <div className="flex items-center p-4 m-8 bg-white rounded-lg shadow-md">

            <div className="ml-4">
                <p className="text-sm text-gray-700">Welcome Back</p>
                <p className="text-xl font-semibold text-gray-700">{user.name}</p>
            </div>
        </div>
    );
}

export default Summary

    import { Component } from 'react'
import { Navigate } from 'react-router-dom'
    

    const PrivateRoute=({Component, logged})=>{
        return logged ? < Component /> : <Navigate to='/login' />

    }



    export default PrivateRoute
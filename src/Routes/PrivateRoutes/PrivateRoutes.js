import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { AuthContext } from '../../Contexts/AuthProvider';

const PrivateRoute = () => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <><PropagateLoader color="#36d7b7" />{console.log('loading')}</>
    }

    if(user){
        return Children;
    }
     
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
    
};

export default PrivateRoute;
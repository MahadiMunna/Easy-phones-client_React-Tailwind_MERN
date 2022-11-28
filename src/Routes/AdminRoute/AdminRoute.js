import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { AuthContext } from '../../Contexts/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();
    
    if(loading || isAdminLoading){
        return <><PropagateLoader color="#36d7b7" /></>
    }

    if(user && isAdmin){
        return children;
    }
     
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
    
};

export default AdminRoute;
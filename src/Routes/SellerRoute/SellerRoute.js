import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { AuthContext } from '../../Contexts/AuthProvider';
import useSeller from '../../Hooks/useSeller';

const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isSeller,isSellerLoading] = useSeller(user?.email)
    const location = useLocation();
    
    if(loading || isSellerLoading){
        return <><PropagateLoader color="#36d7b7" /></>
    }

    if(user && isSeller){
        return children;
    }
     
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
    
};

export default SellerRoute;
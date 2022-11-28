import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { AuthContext } from '../../Contexts/AuthProvider';
import useBuyer from '../../Hooks/useBuyer';

const BuyerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isBuyer,isBuyerLoading] = useBuyer(user?.email)
    const location = useLocation();
    
    if(loading || isBuyerLoading){
        return <><PropagateLoader color="#36d7b7" /></>
    }

    if(user && isBuyer){
        return children;
    }
     
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
    
};

export default BuyerRoute;
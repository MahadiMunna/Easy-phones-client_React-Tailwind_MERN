import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';
import useBuyer from '../../Hooks/useBuyer';
import useSeller from '../../Hooks/useSeller';
import BookModal from './BookModal';

const AvailablePhone = ({ phone, setProduct }) => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const { name, img, price, originalPrice, location, used, seller, email } = phone;
    const handleAdvertise = () => {
        const product = {
            name, img, price, originalPrice, location, used, seller, email
        }
        fetch('https://easy-phones.vercel.app/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        toast.success('Product advertise successfully');
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">

            <img src={img} alt="" />

            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price : {price} <br />Original Price : {originalPrice} <br />Location : {location} <br />Years of use : {used} <br />Seller : {seller}</p>

                <div className="card-actions justify-between items-center">
                    <div className="card-actions justify-between items-center">
                        {

                            isBuyer &&
                            <label htmlFor="booknow" className="badge badge-error text-lg font-bold hover:badge-outline cursor-pointer" onClick={() => handleAdvertise()}>Book Now</label>
                        }
                        {

                            isSeller &&
                            <label className="badge badge-error text-lg font-bold hover:badge-outline cursor-pointer" onClick={() => setProduct()}>Advertise</label>
                        }

                    </div>
                </div>
            </div>
            <BookModal></BookModal>
        </div>
    );
};

export default AvailablePhone;
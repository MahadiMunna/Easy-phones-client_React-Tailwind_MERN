import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useSeller from '../../../Hooks/useSeller';

const MyOrders = () => {
  
    return (
        <div className="overflow-x-auto">
  <table className="table w-full mt-4">
    <thead>
      <tr>
        <th>Image</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Payment</th>
        <th>Payment Status</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>
    );
};

export default MyOrders;
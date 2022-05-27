import React from 'react';

const AllorderD = ({order,index}) => {

const {  email, phone, orderQuantity, service } = order
    return (
      <tr>
        <th>{index + 1}</th>
        <td>{service}</td>
        <td> {email}</td>
        <td>{phone}</td>
        <td> {orderQuantity}</td>
      </tr>
    );
};

export default AllorderD;
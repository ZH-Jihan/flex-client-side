import React from 'react';
import Order from '../../Hooks/order';

const OrderTabel = () => {
    const [orders , setOrders] = Order()
	const DeleteBtn = (id) => {
		const proceed = window.confirm("Are you sure you want to delete");
		if (proceed) {
		  const url = `http://localhost:5000/order/${id}`;
		  fetch(url, {
			method: "DELETE",
		  })
			.then((res) => res.json())
			.then((data) => {
			  
			  const remaing = orders.filter((item) => item._id !== id);
			  setOrders(remaing);
			});
	}}

    return (
<table class="min-w-full border-collapse block md:table">
		<thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Product Img</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Product Name</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">User Name</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email Address</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Mobile</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
			</tr>
		</thead>
        <tbody class="block md:table-row-group">
		{
            orders.map((order) =>(
			
			<tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                <td class="p-0 w-52 md:border md:border-grey-500 text-left block md:table-cell"><img src={order.img} alt='' class=""/></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Name</span>{order.productName}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">User Name</span>{order.customarName}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Email Address</span>{order.customarmail}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Mobile</span>{order.phone}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span class="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
					<button onClick={()=>{DeleteBtn(order._id)}} class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded px-4">Delete</button>
				</td>
			</tr>)
            )
        }
        </tbody>
	</table>
    );
};

export default OrderTabel;
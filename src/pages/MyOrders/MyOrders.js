import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';

const MyOrders = () => {

    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {
        fetch(`https://warm-sands-58745.herokuapp.com/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])

    const cancelOrder = (id) => {
        const url = `https://warm-sands-58745.herokuapp.com/myOrders/${id}`
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    const remainingOrders = myOrders.filter(orders => orders._id !== id);
                    setMyOrders(remainingOrders);
                    alert("Deleted");
                }
            })
    }

    return (
        <div>
            <h1 className="text-center mb-5 mt-5">My Orders: {myOrders.length}</h1>
            <div className="container mb-5">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    {myOrders.map(orders =>
                        <div key={orders._id} class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="card-title">Package: {orders.city}</h3>
                                    <p className="fs-4">Your Name: {orders.name}</p>
                                    <p className="fs-5">Email: {orders.email}</p>
                                    <p className="fs-5">Phone: {orders.phone}</p>
                                    <p className="fs-5">status: {orders.status}</p>
                                    <button onClick={() => cancelOrder(orders._id)} className="btn btn-danger">Cancel your order</button>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>

            </div>
        </div>
    );
};

export default MyOrders;
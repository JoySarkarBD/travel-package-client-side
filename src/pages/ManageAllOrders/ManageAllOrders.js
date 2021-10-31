import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch("https://warm-sands-58745.herokuapp.com/manageOrders")
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    const rejectOrder = (id) => {
        const url = `https://warm-sands-58745.herokuapp.com/manageOrders/${id}`
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    const remainingOrders = allOrders.filter(orders => orders._id !== id);
                    setAllOrders(remainingOrders);
                    alert("Deleted");
                }
            })
    }

    const handleUpdateStatus = id => {
        const url = `https://warm-sands-58745.herokuapp.com/manageOrders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allOrders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Successfully updated status")
                }
            })
    }

    return (
        <div>
            <h1 className="text-center mt-5 mb-5">Manage All Orders: {allOrders.length}</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5 container mx-auto">

                {
                    allOrders.map(orders => <div key={orders._id} className="col">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Package: {orders.city}</h4>
                                <p className="fs-4">Your Name: {orders.name}</p>
                                <p className="fs-5">Email: {orders.email}</p>
                                <p className="fs-5">Booking Date: {orders.bookingDate}</p>
                                <p className="fs-5">Phone: {orders.phone}</p>
                                <p className="fs-5">status: {orders.status}</p>
                                <div className="d-flex justify-content-between">
                                    <button onClick={() => rejectOrder(orders._id)} className="btn btn-danger">Reject order</button>
                                    <button onClick={() => handleUpdateStatus(orders._id)} className="btn btn-success">Approve order</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div >
    );
};

export default ManageAllOrders;
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';

const BookOrder = () => {
    const { id } = useParams();
    const [packages, setPackages] = useState({});
    const nameRef = useRef('');
    const emailRef = useRef('');
    const cityRef = useRef('');
    const addressRef = useRef('');
    const bookingDateRef = useRef('');
    const phoneRef = useRef('');


    useEffect(() => {
        // fetch("/data.json")
        fetch(`https://warm-sands-58745.herokuapp.com/packages/${id}`)
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, []);


    const bookOrder = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const city = cityRef.current.value;
        const address = addressRef.current.value;
        const bookingDate = bookingDateRef.current.value;
        const phone = phoneRef.current.value;

        const newBookedOrder = {
            name: name,
            email: email,
            city: city,
            address: address,
            bookingDate: bookingDate,
            phone: phone,
            status: "Pending"
        }

        fetch("https://warm-sands-58745.herokuapp.com/bookedPackages", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newBookedOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Booked successfully....!")
                }
            })

    }

    const { user } = useAuth();

    return (
        <div className="d-flex flex-column justify-content-center">
            <div>
                <h1 className="text-center mt-5 mb-5">Book Now</h1>
            </div>

            <div className="row container mx-auto">

                <div className="col-md-6 col-sm-12">
                    <div className="mx-auto mb-5">

                        <form onSubmit={bookOrder} className="d-flex flex-column container">
                            <label htmlFor="">Your Name</label>
                            <input type="text" ref={nameRef} value={user.displayName} required />

                            <label htmlFor="">Your Email</label>
                            <input type="text" ref={emailRef} value={user.email} required />

                            <label htmlFor="" >Your Package</label>
                            <input type="text" ref={cityRef} value={packages?.name} required />

                            <label htmlFor="">Your Address</label>
                            <input type="text" ref={addressRef} placeholder="Enter Your Address" required />

                            <label htmlFor="">Booking Date</label>
                            <input type="date" ref={bookingDateRef} />

                            <label htmlFor="">Your Phone Number</label>
                            <input type="number" ref={phoneRef} required />

                            <input type="submit" />

                        </form>
                    </div>
                </div>

                <div className="col-md-6">
                    <h2>Here is your package details</h2>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 mb-4">
                            <div className="card">
                                <img src={packages?.img} alt={packages?.name} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{packages?.name}</h5>
                                    <p className="card-text">{packages?.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookOrder;
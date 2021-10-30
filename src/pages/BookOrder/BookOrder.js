import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';

const BookOrder = () => {
    const { id } = useParams();
    const [packages, setPackages] = useState({});


    useEffect(() => {
        // fetch("/data.json")
        fetch(`https://warm-sands-58745.herokuapp.com/packages/${id}`)
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, []);

    const onSubmit = data => {
        data.status = "pending"
        axios.post("https://warm-sands-58745.herokuapp.com/bookedPackages", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Booked package successfully...!");
                    reset();
                }
            })
        // .then(result => console.log(result))
        // console.log(data);
    }



    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { user } = useAuth();

    return (
        <div className="d-flex flex-column justify-content-center">
            <div>
                <h1 className="text-center mt-5 mb-5">Book Now</h1>
            </div>
            <div className="row container mx-auto">
                <div className="col-md-6 col-sm-12">
                    <div className="mx-auto mb-5">
                        {/* <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}> */}
                        <form onSubmit={handleSubmit(onSubmit)} className="shipping-form d-flex flex-column container">
                            <h2>Fill this form</h2>
                            <input defaultValue={user.displayName} {...register("name")} />

                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className="error">This field is required</span>}
                            <input placeholder="Enter Your Address" defaultValue="" {...register("address", { required: true })} />
                            <input placeholder="Enter Your Package Name" defaultValue="" {...register("city", { required: true })} />
                            <input placeholder="phone number" defaultValue="" {...register("phone", { required: true })} />

                            <input className="bg-primary text-white fs-4" type="submit" />
                        </form>
                    </div></div>
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
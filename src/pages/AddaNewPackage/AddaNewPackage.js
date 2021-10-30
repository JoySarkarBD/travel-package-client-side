import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios"
import "./AddaNewPackage.css"

const AddaNewPackage = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post("https://warm-sands-58745.herokuapp.com/addPackages", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("New Package added successfully...!");
                    reset();
                }
            })
        // .then(result => console.log(result))
        // console.log(data);
    }

    return (
        <div>
            <h1 className="text-center mt-5 mb-5">Add New Package</h1>

            <div className="add-package mb-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Package Name" {...register("name", { required: true })} />
                    <textarea placeholder="Package Description" {...register("description", { required: true })} />
                    <input placeholder="Package Price" type="number"  {...register("price", { required: true })} />
                    <input placeholder="Package Img URL"  {...register("img", { required: true })} />
                    <input type="submit" />
                </form>
            </div>
        </div >
    );
};

export default AddaNewPackage;
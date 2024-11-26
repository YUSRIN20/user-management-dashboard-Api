import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";

const EditUser = ({ handleOpen, user }) => {
    const { userData, SetUserData } = useContext(UserContext);

    const [formData, setFormData] = useState({
        name: user?.name || "",
        username: user?.username || "",
        email: user?.email || "",
        companyName: user?.company?.name || "",
        department: user?.company?.bs || "",
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Save updated data
    const handleSubmit = (e) => {
        e.preventDefault();

        try {

            const updatedUser = {
                ...user,
                name: formData.name,
                username: formData.username,
                email: formData.email,
                company: {
                    name: formData.companyName,
                    bs: formData.department,
                },
            };

            // Update only the matching user in the array
            const updatedUsers = userData.map((u) => {
                if (u.uniqueId && u.uniqueId === user.uniqueId) {
                    // Match by uniqueId if available
                    return updatedUser;
                } else if (!user.uniqueId && u.id === user.id) {
                    return updatedUser;
                }
                return u;
            });

            // Update the context state
            SetUserData(updatedUsers);


            handleOpen();
            toast.success('Updated User Successfully')

        } catch (error) {
            console.error("Failed to update the user:", error);
        }
    };

    return (
        <div className='flex flex-col items-center p-6 gap-6 bg-gradient-to-r from-blue-500 to-teal-500 text-black rounded-lg'>
            <h1 className='text-4xl font-bold text-center'>Edit User</h1>
            <form onSubmit={handleSubmit} className='w-full max-w-md'>
                <div className='space-y-4'>
                    <div className='flex flex-col gap-2'>
                        <label>Name<span className='text-red-600'>*</span></label>
                        <input
                            type='text'
                            placeholder='Enter user name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className='p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500'
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Username<span className='text-red-600'>*</span></label>
                        <input
                            type='text'
                            placeholder='Enter user username'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            className='p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500'
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Email<span className='text-red-600'>*</span></label>
                        <input
                            type='email'
                            placeholder='Enter user email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500'
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Company Name<span className='text-red-600'>*</span></label>
                        <input
                            type='text'
                            placeholder='Enter user company name'
                            name='companyName'
                            value={formData.companyName}
                            onChange={handleChange}
                            className='p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500'
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Department<span className='text-red-600'>*</span></label>
                        <input
                            type='text'
                            placeholder='Enter user department'
                            name='department'
                            value={formData.department}
                            onChange={handleChange}
                            className='p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500'
                            required
                        />
                    </div>
                    <div className='flex justify-center gap-5'>
                        <button type='submit' className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-200'>
                            Update
                        </button>
                        <button className='bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-200' onClick={handleOpen}>
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default EditUser;

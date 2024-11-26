import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { UserContext } from '../Context/UserContext';
import { v4 as uuidv4 } from 'uuid';
const CreateUser = ({handleOpen}) => {
    const {userData ,SetUserData} = useContext(UserContext) //Access userData from userContext
    
    const [newUser, setNewUser] = useState({
        id:'',
        uniqueId:'',
        name: '',
        username: '',
        email: '',
        company: {
            name: '',
            bs: '', 
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser((prev) => {
            if (name === 'companyname') {
                return { ...prev, company: { ...prev.company, name: value } };
            } else if (name === 'Department') {
                return { ...prev, company: { ...prev.company, bs: value } };
            }
            return { ...prev, [name]: value };
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        const {id, ...userWithoutId} = newUser
        const userWithUniqueId = {...userWithoutId,uniqueId:uuidv4()}
        try {
            // POST request to create new user
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', userWithUniqueId);

            // Update local state with the new user
            SetUserData([...userData,response.data]);
            
            toast.success('New User Created Successfully');
          
        } catch (error) {
            console.error('Failed to create data', error);
            toast.error('Failed to Create Data');
        }
    };
    return (
        <div className='flex flex-col items-center p-6 gap-6 bg-gradient-to-r from-teal-500 to-blue-500 text-black rounded-lg'>
        <h1 className='text-4xl font-bold text-center'>Create New User</h1>
        <form onSubmit={handleFormSubmit} className='w-full max-w-md'>
            <div className='space-y-4'>
                <div className='flex flex-col gap-2'>
                    <label>Name<span className='text-red-600'>*</span></label>
                    <input
                        type='text'
                        placeholder='Enter user name'
                        name='name'
                        value={newUser.name}
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
                        value={newUser.username}
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
                        value={newUser.email}
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
                        name='companyname'
                        value={newUser.company.name}
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
                        name='Department'
                        value={newUser.company.bs}
                        onChange={handleChange}
                        className='p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500'
                        required
                    />
                </div>
                <div className='flex justify-center gap-5'>
                    <button type='submit' className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-200' onClick={handleOpen}>
                        Create
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

export default CreateUser;

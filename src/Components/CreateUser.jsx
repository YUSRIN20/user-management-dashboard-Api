import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { UserContext } from '../Context/UserContext';

const CreateUser = ({handleOpen}) => {
    const {userData ,SetUserData} = useContext(UserContext) //Access userData from userContext
    
    const [newUser, setNewUser] = useState({
        id:'',
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
        
        try {
            // POST request to create new user
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);

            // Update local state with the new user
            SetUserData([...userData,response.data]);
            
            toast.success('New User Created Successfully');
            console.log(userData)
        } catch (error) {
            console.error('Failed to create data', error);
            toast.error('Failed to Create Data');
        }
    };
    return (
        <div className='flex flex-col items-center p-5 gap-5'>
            <h1 className='text-black text-3xl font-medium'>Create New User</h1>
            <form onSubmit={handleFormSubmit}>
                <div className='flex flex-col gap-5 text-black'>
                    <div className='flex flex-col gap-2'>
                        <label>Name<span className='text-red-600'>*</span></label>
                        <input
                            type='text'
                            placeholder='Enter user name'
                            name='name'
                            value={newUser.name}
                            onChange={handleChange}
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
                        />
                    </div>
                    <div>
                        <button type='submit' className='bg-green-500 p-2 rounded-xl font-medium text-md' onClick={handleOpen}>
                            Create
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateUser;

import React, { useContext, useState } from 'react';
import CreateModal from './CreateModal';
import { UserContext } from '../Context/UserContext';
import { Button } from "@material-tailwind/react";
import { toast } from 'react-toastify';

const Home = () => {
    const { userData, SetUserData } = useContext(UserContext);

    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);

    const handleEdit = (user) => {
        setSelectedUser(user);
        setMode("edit");
        handleOpen();
    };

    const handleDelete = (user) => {
        const filteredDatas = userData.filter((u) => {
            if (user.uniqueId) {
                return u.uniqueId !== user.uniqueId;
            }
            return u.id !== user.id;
        });
        SetUserData(filteredDatas);
        toast.success('User Deleted Successfully')
    };

    const handleOpen = () => setOpen(!open);

    return (
        <div className="bg-gradient-to-r from-teal-100 to-teal-300 min-h-screen py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-5xl font-bold text-center text-black-700 mb-12">User Profiles</h1>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        userData.map((item, index) => (
                            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out" key={index}>
                                <h1 className="text-2xl font-serif text-teal-600 mb-3">{item.name}</h1>
                                <h2 className="text-md text-gray-800 mb-2">Username: <span className="font-medium">{item.username}</span></h2>
                                <h2 className="text-md text-gray-800 mb-2">Email: <span className="font-medium">{item.email}</span></h2>
                                <h2 className="text-md text-gray-800 mb-2">Company: <span className="font-medium text-teal-500">{item.company.name}</span></h2>
                                <h2 className="text-md text-gray-800 mb-4">Department: <span className="font-medium">{item.company.bs}</span></h2>

                                <div className="flex justify-between space-x-4">
                                    <Button variant="filled" color="teal" onClick={() => handleEdit(item)} className="w-full text-white hover:bg-teal-600 transition-colors duration-200">
                                        Edit
                                    </Button>
                                    <Button variant="filled" color="orange" onClick={() => handleDelete(item)} className="w-full text-white hover:bg-orange-600 transition-colors duration-200">
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='flex justify-center my-12'>
                    <CreateModal
                        handleOpen={handleOpen}
                        open={open}
                        mode={mode}
                        setMode={setMode}
                        selectedUser={selectedUser} // passing selectedUser to modal component
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;

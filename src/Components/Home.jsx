import React, { useContext, useEffect, useState } from 'react';
import CreateModal from './CreateModal';
import { UserContext } from '../Context/UserContext';
import {
    Button,

} from "@material-tailwind/react";

const Home = () => {
    const { userData } = useContext(UserContext)

    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState("");
    const [selectedUser,setSelectedUser] = useState(null)

    const handleEdit = (user) => {
        setSelectedUser(user)
        setMode("edit");
        handleOpen();
    };

    const handleOpen = () => setOpen(!open);

    return (
        <div className=''>
            <div>
                {
                    userData.map((item, index) => {
                        return (

                            <div className='m-5' key={index}>
                                <h1>Name: {item.name}</h1>
                                <h1>Username: {item.username}</h1>
                                <h1>Email: {item.email}</h1>
                                <h1>Company: {item.company.name}</h1>
                                <h1>Department: {item.company.bs}</h1>

                                <Button variant="gradient" onClick={()=>handleEdit(item)} >
                                    Edit
                                </Button>
                            </div>

                        )
                    })
                }
                <div>
                    <CreateModal 
                        handleOpen={handleOpen} 
                        open={open} 
                        mode={mode} 
                        setMode={setMode}
                        selectedUser={selectedUser} // passing selected user to modal component
                    /> 
                     
                </div>
            </div>
        </div>
    );
};

export default Home;
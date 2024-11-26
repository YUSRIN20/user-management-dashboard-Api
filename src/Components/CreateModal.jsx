import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import CreateUser from './CreateUser';

const CreateModal = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <div>
            <Button onClick={handleOpen} variant="gradient" >
                Create New User
            </Button>
            <Dialog open={open} handler={handleOpen}>
                {/* Create user Component */}
                <CreateUser  handleOpen={handleOpen}/>
            </Dialog>
        </div>
    );
};

export default CreateModal;
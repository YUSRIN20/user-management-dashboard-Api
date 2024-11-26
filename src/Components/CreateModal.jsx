import React, { useState } from "react";
import { Button, Dialog } from "@material-tailwind/react";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";

const CreateModal = ({ setMode, mode, handleOpen, open , selectedUser }) => {

    const handleCreate = () => {
        setMode("create");
        handleOpen();
    };

    return (
        <div>
            {/* Button to Open Create Mode */}
            <Button onClick={handleCreate} variant="gradient" className="text-md">
                Create New User
            </Button>


            {/* Unified Dialog */}
            <Dialog open={open} handler={handleOpen}>
                {mode === "create" && <CreateUser handleOpen={handleOpen} />}
                {mode === "edit" && <EditUser handleOpen={handleOpen} user={selectedUser}/>}
            </Dialog>
        </div>
    );
};

export default CreateModal;

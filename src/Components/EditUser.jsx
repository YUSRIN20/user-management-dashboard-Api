import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";

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

        // Update the context with the modified user
        const updatedUsers = userData.map((item) =>
            item.id === user.id
                ? {
                      ...item,
                      name: formData.name,
                      username: formData.username,
                      email: formData.email,
                      company: {
                          ...item.company,
                          name: formData.companyName,
                          bs: formData.department,
                      },
                  }
                : item
        );

        SetUserData(updatedUsers); 
        handleOpen();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Company</label>
                <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Department</label>
                <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditUser;

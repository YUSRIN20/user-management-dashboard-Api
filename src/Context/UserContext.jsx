import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";


export const UserContext = createContext()


export const UserProvider = ({ children }) => {

    const [userData, SetUserData] = useState([])


    const fetchUserData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')

            SetUserData(response.data)

        } catch (error) {
            console.error(error);

        }
    }
    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <UserContext.Provider value={{userData,SetUserData}}>
            {children}
        </UserContext.Provider>
    )

}
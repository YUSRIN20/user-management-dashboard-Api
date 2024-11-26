import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import CreateModal from './CreateModal';
import { UserContext } from '../Context/UserContext';


const Home = () => {
    const {userData} = useContext(UserContext)

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

                            </div>


                        )
                    })
                }
                <div>
                    <CreateModal />
                </div>
            </div>
        </div>
    );
};

export default Home;
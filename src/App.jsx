import React from 'react';
import Home from './Components/Home';
import Modal from './Components/CreateModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import { UserProvider } from './Context/UserContext';
const App = () => {

  return (
    <UserProvider>
      <div className='container mx-auto'>
        <Home />
        <div>
          <ToastContainer />
        </div>
      </div>
    </UserProvider>

  );
};

export default App;
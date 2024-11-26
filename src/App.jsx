import React from 'react';
import Home from './Components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import { UserProvider } from './Context/UserContext';
const App = () => {

  return (
    <UserProvider>
      <div >
        <Home />
        <div>
          <ToastContainer />
        </div>
      </div>
    </UserProvider>

  );
};

export default App;
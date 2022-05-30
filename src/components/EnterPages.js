import React from 'react';

import { useLocation } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';

const EnterPages = () => {
    
    const location = useLocation();

    return (
        <>
            <div>
                {
                    location.pathname === "/signup" ? <Signup /> : <Login />
                }
            </div>
        </>
    );
};

export default EnterPages;
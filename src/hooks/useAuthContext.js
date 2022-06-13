import React, { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';

const useAuthContext = () => {

    const context = useContext(AuthContext);
    
    if (!context) {
        throw Error("We got a problem here");
    }

    return context;
};

export default useAuthContext;
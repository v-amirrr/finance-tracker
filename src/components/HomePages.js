import React, { useEffect } from 'react';

import BeforeLogin from './BeforeLogin';
import AfterLogin from './AfterLogin';

import useAuthContext from '../hooks/useAuthContext';

const userLocal = JSON.parse(localStorage.getItem('user'));


const HomePages = () => {
    
    const { user, dispatch } = useAuthContext();

    useEffect(() => {
        if (userLocal) {
            dispatch({ type: "LOGIN", payload: JSON.parse(localStorage.getItem('res'))});
        }
    }, []);

    return (
        <>
            {
                user 
                ?
                <AfterLogin />
                :
                <BeforeLogin />
            }
        </>
    );
};

export default HomePages;
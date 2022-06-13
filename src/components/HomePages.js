import React from 'react';

import BeforeLogin from './BeforeLogin';
import AfterLogin from './AfterLogin';

import useAuthContext from '../hooks/useAuthContext';

const HomePages = () => {

    const { user } = useAuthContext();
    console.log(user);

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
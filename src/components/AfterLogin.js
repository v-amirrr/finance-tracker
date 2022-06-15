import React from 'react';
import styles from "./AfterLogin.module.css";

import Navbar from './Navbar';
import TransactionForm from './TransactionForm';

import useAuthContext from '../hooks/useAuthContext';

const AfterLogin = () => {

    const { user } = useAuthContext();

    return (
        <>
            <div>
                <Navbar />
                <div>
                    <div className={styles["list"]}>
                        list
                    </div>

                    <div className={styles["form"]}>
                        <TransactionForm uid={user.uid} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AfterLogin;
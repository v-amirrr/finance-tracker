import React from 'react';
import styles from "./AfterLogin.module.css";

import Navbar from './Navbar';
import TransactionForm from './TransactionForm';

const AfterLogin = () => {
    return (
        <>
            <div>
                <Navbar />
                <div>
                    <div className={styles["list"]}>
                        list
                    </div>

                    <div className={styles["form"]}>
                        <TransactionForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AfterLogin;
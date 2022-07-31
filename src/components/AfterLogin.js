import React from 'react';
import styles from "./AfterLogin.module.css";

import Navbar from './Navbar';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

import useAuthContext from '../hooks/useAuthContext';

import { useCollection } from "../hooks/useCollection";

import Footer from './Footer';

const AfterLogin = () => {

    const { user } = useAuthContext();
    const { documents, error } = useCollection(
        'transactions', 
        ["uid", "==", user.uid], 
        ["createdAt", "desc"]
    );
    
    return (
        <>
            <div>
                <div className={styles["after-login"]}>
                    <Navbar />

                    <div className={styles["after-login-main"]}>
                    
                        <div className={styles["list"]}>
                            <TransactionList transactions={documents} error={error} />
                        </div>

                        <div className={styles["form"]}>
                            <TransactionForm uid={user.uid} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AfterLogin;
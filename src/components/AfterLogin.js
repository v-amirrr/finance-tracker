import React from 'react';
import styles from "./AfterLogin.module.css";

import Navbar from './Navbar';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

import useAuthContext from '../hooks/useAuthContext';

import { useCollection } from "../hooks/useCollection";

const AfterLogin = () => {

    const { user } = useAuthContext();
    const { documents, error } = useCollection('transactions');

    return (
        <>
            <div>
                <Navbar />
                <div>
                    <div className={styles["list"]}>
                        {documents && <TransactionList transaction={documents} />}
                        {error && <p>{error}</p>}
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
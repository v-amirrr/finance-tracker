import React from 'react';
import styles from "./AfterLogin.module.css";

import Navbar from './Navbar';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

import useAuthContext from '../hooks/useAuthContext';

import { useCollection } from "../hooks/useCollection";

import { motion, AnimatePresence } from 'framer-motion';

const afterloginVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: [-10, 10, 0], transition: { delay: 0.8, duration: 0.4, type: "tween", when: "beforeChildren" } },
    exit: {opacity: 0, y: -10, transition: { duration: 0.4, type: "tween" }}
}

const AfterLogin = () => {

    const { user } = useAuthContext();
    const { documents, error } = useCollection('transactions');

    return (
        <>
            <AnimatePresence>
                <motion.div className={styles["after-login"]} initial="hidden" animate="visible" exit="exit" variants={afterloginVariants}>
                    <Navbar />
                    <div className={styles["after-login-main"]}>
                        <div className={styles["list"]}>
                            <TransactionList transactions={documents} />
                        </div>

                        <div className={styles["form"]}>
                            <TransactionForm uid={user.uid} />
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default AfterLogin;
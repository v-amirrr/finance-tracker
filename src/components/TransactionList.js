import React from 'react';
import styles from "./TransactionList.module.css";

import { useFirestore } from "../hooks/useFirestore";

import { FaTrash } from "react-icons/fa";

import { motion, AnimatePresence } from 'framer-motion';

const listItemsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.4, type: "tween", when: "beforeChildren" } },
    exit: {opacity: 0, y: 50, transition: { duration: 0.4, type: "tween" }}
}

const TransactionList = ({ transactions, error }) => {

    const { deleteDocument } = useFirestore('transactions');

    return (
        <>
        <AnimatePresence>
            <div className={styles["list"]}>
                <AnimatePresence>
                    {
                        transactions
                        &&
                        transactions.map(item => (
                            <motion.div className={styles["item"]} key={item.id} initial="hidden" animate="visible" exit="exit" variants={listItemsVariants}>
                                <p>{item.name}</p>
                                <p>${item.amount}</p>
                                <div onClick={() => deleteDocument(item.id)}><FaTrash /></div>
                            </motion.div>
                        ))
                    }
                </AnimatePresence>

                <AnimatePresence>
                    {
                        transactions==false
                        &&
                        error==false
                        &&
                        <motion.div key="empty" className={styles["item"]} initial="hidden" animate="visible" exit="exit" variants={listItemsVariants}>
                            <p>There Is No Transaction!</p>
                        </motion.div>
                    }
                </AnimatePresence>

                <AnimatePresence>
                    {
                        error
                        &&
                        <motion.div key="error" className={styles["item"]} initial="hidden" animate="visible" exit="exit" variants={listItemsVariants}>
                            <p>{error}</p>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </AnimatePresence>
        </>
    );
};

export default TransactionList;
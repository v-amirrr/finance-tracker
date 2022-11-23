import React from 'react';
import styles from "./TransactionList.module.css";

import { useFirestore } from "../hooks/useFirestore";

import { FaTrash } from "react-icons/fa";

import { motion, AnimatePresence } from 'framer-motion';

const transactionListVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { delay: 0.8, duration: 0.4, type: "tween", when: "beforeChildren" } },
    exit: { opacity: 0, x: -50, scale: 0.9, transition: { duration: 0.4, type: "tween", when: "afterChlidren" } }
}

const listItemsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.4, type: "tween" } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.4, type: "tween" } }
}

const TransactionList = ({ transactions, error }) => {

    const { deleteDocument } = useFirestore('transactions');

    return (
        <>
            <motion.div className={styles["list"]} initial="hidden" animate="visible" exit="exit" variants={transactionListVariants}>
                <div className={styles["list-content"]}>
                    <AnimatePresence>
                        {
                            transactions
                            &&
                            transactions.map(item => (
                                <motion.div className={styles["item"]} key={item.id} initial="hidden" animate="visible" exit="exit" variants={listItemsVariants}>
                                    <p className={styles["item-name"]}>{item.name}</p>
                                    <p className={styles["item-amount"]}>${item.amount}</p>
                                    <motion.div onClick={() => deleteDocument(item.id)} whileTap={{ scale: 0.8 }}><FaTrash /></motion.div>
                                </motion.div>
                            ))
                        }
                        
                        {
                            error
                            &&
                            <motion.div key="error" className={styles["item"]} initial="hidden" animate="visible" exit="exit" variants={listItemsVariants}>
                                <p className={styles["item-error"]}>{error}</p>
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
            </motion.div>
        </>
    );
};

export default TransactionList;
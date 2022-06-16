import React from 'react';
import styles from "./TransactionList.module.css";

import { motion, AnimatePresence } from 'framer-motion';

const listItemsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.4, type: "tween", when: "beforeChildren" } },
    exit: {opacity: 0, y: -50, transition: { duration: 0.4, type: "tween" }}
}

const TransactionList = ({ transactions, error }) => {
    return (
        <>
        <AnimatePresence>
            <div className={styles["list"]}>{console.log(transactions)}
                {
                    transactions
                    &&
                    transactions.map(item => (
                        <motion.div className={styles["item"]} key={item.id} initial="hidden" animate="visible" exit="exit" variants={listItemsVariants}>
                            <p>{item.name}</p>
                            <p>${item.amount}</p>
                        </motion.div>
                    ))
                }

                {
                    transactions==false
                    &&
                    error==false
                    &&
                    <motion.div className={styles["item"]} initial="hidden" animate="visible" exit="exit" variants={listItemsVariants}>
                        <p>There Is No Transaction!</p>
                    </motion.div>
                }

                {
                    error
                    &&
                    <motion.div className={styles["item"]} initial="hidden" animate="visible" exit="exit" variants={listItemsVariants}>
                        <p>{error}</p>
                    </motion.div>
                }
            </div>
        </AnimatePresence>
        </>
    );
};

export default TransactionList;
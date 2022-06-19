import React, { useState } from 'react';
import styles from "./TransactionForm.module.css";

import { useFirestore } from '../hooks/useFirestore';

import { motion } from 'framer-motion';

const formTitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.4, type: "tween" } },
    exit: {opacity: 0, y: 50, transition: { duration: 0.4, type: "tween" }}
}

const formInput1Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.4, type: "tween" } },
    exit: {opacity: 0, y: 50, transition: { duration: 0.4, type: "tween" }}
}

const formInput2Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.4, duration: 0.4, type: "tween" } },
    exit: {opacity: 0, y: 50, transition: { duration: 0.4, type: "tween" }}
}

const formBtnVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 1.6, duration: 0.4, type: "tween" } },
    exit: {opacity: 0, y: 50, transition: { duration: 0.4, type: "tween" }}
}

const TransactionForm = ({ uid }) => {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const { addDocument, state } = useFirestore("transactions");

    const transactionAdder = e => {
        e.preventDefault();
        if (name && amount) {
            addDocument({ name, amount, uid });
            setName("");
            setAmount("");
        }
    }

    return (
        <>
            <form className={styles["form"]}>
                <motion.h5 className={styles["form-title"]} initial="hidden" animate="visible" exit="exit" variants={formTitleVariants}>
                    Add a Transaction
                </motion.h5>

                <div className={styles["form-inputs"]}>
                    <motion.input initial="hidden" animate="visible" exit="exit" variants={formInput1Variants} placeholder='Transaction Name' type="text" value={name} onChange={e => setName(e.target.value)} />
                    <motion.input initial="hidden" animate="visible" exit="exit" variants={formInput2Variants} placeholder='Amount $' type="number" value={amount} onChange={e => setAmount(e.target.value)} />
                </div>

                <motion.button initial="hidden" animate="visible" exit="exit" variants={formBtnVariants} className={styles["form-btn"]} onClick={transactionAdder} whileTap={{ scale: 0.8 }}>
                    Add
                </motion.button>
            </form>
        </>
    );
};

export default TransactionForm;
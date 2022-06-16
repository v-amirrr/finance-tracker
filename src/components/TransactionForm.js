import React, { useState } from 'react';
import styles from "./TransactionForm.module.css";

import { useFirestore } from '../hooks/useFirestore';

import { motion } from 'framer-motion';

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
                <h5 className={styles["form-title"]}>Add a Transaction</h5>
                <div className={styles["form-inputs"]}>
                    <input placeholder='Transaction Name' type="text" value={name} onChange={e => setName(e.target.value)} />
                    <input placeholder='Amount $' type="number" value={amount} onChange={e => setAmount(e.target.value)} />
                </div>
                <motion.button className={styles["from-btn"]} onClick={transactionAdder} whileTap={{ scale: 0.8 }}>Add</motion.button>
            </form>
        </>
    );
};

export default TransactionForm;
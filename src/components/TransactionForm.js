import React, { useState } from 'react';
import styles from "./TransactionForm.module.css";

import { useFirestore } from '../hooks/useFirestore';

import { motion } from 'framer-motion';

const TransactionForm = ({ uid }) => {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const { addDocument, state } = useFirestore("transactions");

    const transactionAdder = () => {
        if (name && amount) {
            addDocument({ name, amount, uid });
            setName("");
            setAmount("");
        } else {
            alert("You Have To Put The Name And Amount Of Your Transaction!");
        }
    }

    return (
        <>
            <form className={styles["form"]}>
                <h5 className={styles["form-title"]}>Add a Transaction</h5>
                <div className={styles["form-inputs"]}>
                    <input required placeholder='Transaction Name' type="text" value={name} onChange={e => setName(e.target.value)} />
                    <input required placeholder='Amount $' type="number" value={amount} onChange={e => setAmount(e.target.value)} />
                </div>
                <motion.button className={styles["from-btn"]} onClick={transactionAdder} whileTap={{ scale: 0.9 }}>Add</motion.button>
            </form>
        </>
    );
};

export default TransactionForm;
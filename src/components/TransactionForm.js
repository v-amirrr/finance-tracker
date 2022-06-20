import React, { useState } from 'react';
import styles from "./TransactionForm.module.css";

import { useFirestore } from '../hooks/useFirestore';

import { motion } from 'framer-motion';

const transactionFormVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { delay: 0.8, duration: 0.4, type: "tween", when: "beforeChildren" } },
    exit: { opacity: 0, x: 50, scale: 0.9, transition: { duration: 0.4, type: "tween", when: "afterChlidren" } }
}

const formTitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: {duration: 0.4, type: "tween" } },
}

const formInput1Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.4, type: "tween" } },
}

const formInput2Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.4, type: "tween" } },
}

const formBtnVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.4, type: "tween" } },
}

const TransactionForm = ({ uid }) => {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const { addDocument } = useFirestore("transactions");

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
            <motion.form className={styles["form"]} initial="hidden" animate="visible" exit="exit" variants={transactionFormVariants}>
                <motion.h5 className={styles["form-title"]} variants={formTitleVariants}>
                    Add a Transaction
                </motion.h5>

                <div className={styles["form-inputs"]}>
                    <motion.input variants={formInput1Variants} placeholder='Transaction Name' type="text" value={name} onChange={e => setName(e.target.value)} />
                    <motion.input variants={formInput2Variants} placeholder='Amount $' type="number" value={amount} onChange={e => setAmount(e.target.value)} />
                </div>

                <motion.button variants={formBtnVariants} className={styles["form-btn"]} onClick={transactionAdder} whileTap={{ scale: 0.8 }}>
                    Add
                </motion.button>
            </motion.form>
        </>
    );
};

export default TransactionForm;
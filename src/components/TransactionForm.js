import React, { useState } from 'react';
import styles from "./TransactionForm.module.css";

const TransactionForm = () => {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const transactionAdder = () => {
        console.log(name, amount);
    }

    return (
        <>
            <div className={styles["form"]}>
                <h5 className={styles["form-title"]}>Add a Transaction</h5>
                <div className={styles["form-inputs"]}>
                    <input placeholder='Transaction Name' type="text" required value={name} onChange={e => setName(e.target.value)} />
                    <input placeholder='Amount $' type="number" required value={amount} onChange={e => setAmount(e.target.value)} />
                </div>
                <button className={styles["from-btn"]} onClick={transactionAdder}>Add</button>
            </div>
        </>
    );
};

export default TransactionForm;
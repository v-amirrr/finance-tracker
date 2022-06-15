import React from 'react';
import styles from "./TransactionList.module.css";

const TransactionList = ({ transactions }) => {
    return (
        <>
            <div className={styles["list"]}>
                {
                    transactions.map(item => (
                        <div className={styles["item"]} key={item.id}>
                            <p>{item.name}</p>
                            <p>${item.amount}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default TransactionList;
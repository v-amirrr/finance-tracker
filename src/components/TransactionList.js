import React from 'react';
import styles from "./TransactionList.module.css";

const TransactionList = ({ transaction }) => {
    return (
        <>
            <div className={styles["list"]}>
                {
                    transaction.map(item => {
                        <div className={styles["item"]} key={item.id}>
                            <h6>{item.name}</h6>
                            <p>${item.amount}</p>
                        </div>
                    })
                }
            </div>
        </>
    );
};

export default TransactionList;
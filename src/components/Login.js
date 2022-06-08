import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import styles from "./Login.module.css";

const loginPageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: [10, -10, 0], transition: { delay: 0.5, duration: 0.4, type: "tween" } },
    exit: {opacity: 0, y: -10, transition: { duration: 0.4, type: "tween" }}
}

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        console.log(email, password);
    }

    return (
        <>
            <div className={styles.page}>
                <motion.form className={styles["login-form"]} onSubmit={submitHandler} initial="hidden" animate="visible" exit="exit" variants={loginPageVariants}>
                    <h1>Login</h1>

                    <div className={styles["form-section"]}>
                        {/* <label>Email:</label> */}
                        <input placeholder='Email' type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className={styles["form-section"]}>
                        {/* <label>Password:</label> */}
                        <input placeholder='Password' type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className={styles["signup-section"]}>
                        <p>Don't have an account? <Link to="/signup">Create One</Link></p>
                    </div>

                    <div className={styles["form-btn"]} onClick={submitHandler}>Login</div>
                </motion.form>
            </div>   
        </>
    );
};

export default Login;
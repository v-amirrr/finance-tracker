import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

import styles from "./Login.module.css";

import { IoMdArrowRoundBack } from "react-icons/io";


const loginPageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: [-10, 10, 0], transition: { delay: 0.4, duration: 0.4, type: "tween" } },
    exit: {opacity: 0, y: 10, transition: { duration: 0.4, type: "tween" }}
}

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        console.log(email, password);
    }

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.page}>
                <motion.form className={styles["login-form"]} onSubmit={submitHandler} initial="hidden" animate="visible" exit="exit" variants={loginPageVariants}>
                    <div className={styles["title-section"]}>
                        <i onClick={() => navigate(-1)}><IoMdArrowRoundBack /></i>
                        <h1>Login</h1>
                    </div>

                    <div className={styles["form-section"]}>
                        <input placeholder='Email' type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className={styles["form-section"]}>
                        <input placeholder='Password' type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className={styles["signup-section"]}>
                        <p>Don't have an account? <Link to="/signup"><p className='link'>Create One</p></Link></p>
                    </div>

                    <div className={styles["form-btn"]} onClick={submitHandler}>Login</div>
                </motion.form>
            </div>   
        </>
    );
};

export default Login;
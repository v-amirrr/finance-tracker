import React, { useState } from 'react';
import styles from "./Login.module.css";

import { Link, useNavigate } from 'react-router-dom';

import { IoMdArrowRoundBack } from "react-icons/io";

import { useLogin } from "../hooks/useLogin";

import LogoutRedirect from './LogoutRedirect';

import Popup from './Popup';

import Footer from './Footer';

import { motion } from 'framer-motion';

const loginPageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: [-10, 10, 0], transition: { duration: 0.4, type: "tween" } },
    exit: {opacity: 0, y: 10, transition: { duration: 0.4, type: "tween" }}
}

const userLocal = JSON.parse(localStorage.getItem('res'));

const Login = () => {
    
    const navigate = useNavigate();
    const { login, error } = useLogin();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        login(email, password);
    }

    return (
        <>
            <div className={styles.page}>
                {
                    userLocal==false
                    ?
                    <LogoutRedirect />
                    :
                    <motion.form className={styles["login-form"]} onSubmit={submitHandler} initial="hidden" animate="visible" exit="exit" variants={loginPageVariants}>
                        <div className={styles["title-section"]}>
                            <motion.i onClick={() => navigate("/")} whileTap={{ scale: 0.6 }}><IoMdArrowRoundBack /></motion.i>
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

                        <motion.div className={styles["form-btn"]} onClick={submitHandler} whileTap={{ scale: 0.9 }}>Login</motion.div>
                    </motion.form>
                }
                
                {error && <Popup text={error} />}

                <Footer />
            </div>   
        </>
    );
};

export default Login;
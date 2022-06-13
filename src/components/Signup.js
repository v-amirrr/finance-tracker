import React, { useState } from 'react';
import styles from "./Signup.module.css";

import { Link, useNavigate } from 'react-router-dom';

import { IoMdArrowRoundBack } from "react-icons/io";

import { useSignup } from "../hooks/useSignup";

import Loader from './Loader';

import { motion } from 'framer-motion';

const signupPageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: [-10, 10, 0], transition: { delay: 0.4, duration: 0.4, type: "tween" } },
    exit: {opacity: 0, y: 10, transition: { duration: 0.4, type: "tween" }}
}

const Signup = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);

    const {signup, error} = useSignup();

    const submitHandler = e => {
        e.preventDefault();
        signup(email, password, name);
    }

    return (
        <>
            <div className={styles.page}>
                <motion.form className={styles["signup-form"]} initial="hidden" animate="visible" exit="exit" variants={signupPageVariants}>
                    <div className={styles["title-section"]}>
                        <motion.i onClick={() => navigate(-1)} whileTap={{ scale: 0.6 }}><IoMdArrowRoundBack /></motion.i>
                        <h1>Sign Up</h1>
                    </div>

                    <div className={styles["form-section"]}>
                        <input placeholder='Name' type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>

                    <div className={styles["form-section"]}>
                        <input placeholder='Email' type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className={styles["form-section"]}>
                        <input placeholder='Password' type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className={styles["form-section"]}>
                        <input placeholder='Confirm' type="password" value={repassword} onChange={e => setRepassword(e.target.value)} />
                    </div>

                    <div className={styles["login-section"]}>
                        <p>Already have an account? <Link to="/login"><p className='link'>Login</p></Link></p>
                    </div>

                    {error ? <div className={styles["error-section"]}>{error}</div> : ""}

                    <motion.div className={styles["form-btn"]} onClick={submitHandler} whileTap={{ scale: 0.9 }}>Create</motion.div>
                </motion.form>
            </div> 
        </>
    );
};

export default Signup;
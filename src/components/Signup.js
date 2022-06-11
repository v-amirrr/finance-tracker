import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useSignup } from "../hooks/useSignup";

import styles from "./Signup.module.css";

import { motion } from 'framer-motion';

import { IoMdArrowRoundBack } from "react-icons/io";

const signupPageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: [-10, 10, 0], transition: { delay: 0.4, duration: 0.4, type: "tween" } },
    exit: {opacity: 0, y: 10, transition: { duration: 0.4, type: "tween" }}
}

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);

    const {signup, isPending, error} = useSignup();

    const submitHandler = e => {
        e.preventDefault();
        signup(email, password, name);
    }

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.page}>
                <motion.form className={styles["signup-form"]} initial="hidden" animate="visible" exit="exit" variants={signupPageVariants}>
                <div className={styles["title-section"]}>
                        <i onClick={() => navigate(-1)}><IoMdArrowRoundBack /></i>
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

                    <div className={styles["form-btn"]} onClick={submitHandler}>Sign Up</div>
                </motion.form>
            </div> 
        </>
    );
};

export default Signup;
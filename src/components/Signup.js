import React, { useState, useEffect } from 'react';
import styles from "./Signup.module.css";

import { Link, useNavigate } from 'react-router-dom';

import { IoMdArrowRoundBack } from "react-icons/io";

import { useSignup } from "../hooks/useSignup";

import LogoutRedirect from './LogoutRedirect';

import Popup from './Popup';

import Loader from './Loader';

import Text from "./Text";

import Footer from './Footer';

import { motion, AnimatePresence } from 'framer-motion';

const signupPageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: [-10, 10, 0], transition: {  duration: 0.4, type: "tween" } },
    exit: {opacity: 0, y: 10, transition: { duration: 0.4, type: "tween" }}
}

const Signup = () => {

    useEffect(() => {
        setUserLocal(JSON.parse(localStorage.getItem('res')));
    }, []);

    const navigate = useNavigate();
    const { signup, error, isPending } = useSignup();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [userLocal, setUserLocal] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        signup(email, password, name, repassword);
    }

    return (
        <>
            <div className={styles.page}>
                {
                    userLocal
                    ?
                    <LogoutRedirect />
                    :
                    <>
                        <motion.form className={styles["signup-form"]} initial="hidden" animate="visible" exit="exit" variants={signupPageVariants}>
                            <div className={styles["title-section"]}>
                                <motion.i onClick={() => navigate("/login")} whileTap={{ scale: 0.6 }}><IoMdArrowRoundBack /></motion.i>
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
                                <div>Already have an account? <Link to="/login"><div className='link'>Login</div></Link></div>
                            </div>

                            <motion.div className={styles["form-btn"]} onClick={submitHandler} whileTap={{ scale: 0.9 }}>
                                <AnimatePresence key="loader">
                                    { isPending && <Loader /> }
                                </AnimatePresence>
                                
                                <AnimatePresence>
                                    { !isPending && <Text text="Create" /> }
                                </AnimatePresence>
                            </motion.div>
                        </motion.form>

                        <AnimatePresence>
                            {error && <Popup text={error} />}
                        </AnimatePresence>

                        <Footer />
                    </>
                }

            </div> 
        </>
    );
};

export default Signup;
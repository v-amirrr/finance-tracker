import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import LogoutRedirect from './LogoutRedirect';
import Popup from './Popup';
import Loader from './Loader';
import Text from "./Text";
import Footer from './Footer';

import { useLogin } from "../hooks/useLogin";

import { IoMdArrowRoundBack } from "react-icons/io";

import styles from "./Login.module.css";
import { motion, AnimatePresence } from 'framer-motion';

const loginPageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: [-10, 10, 0], transition: { duration: 0.4, type: "tween" } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.4, type: "tween" } }
}

const BtnTextVariants = {
    hidden: { opacity: 0, x: 100, scale: 0.5 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, type: "tween" } },
    exit: { opacity: 0, x: -100, scale: 0.5, transition: { duration: 0.6, type: "tween" } }
}

const Login = () => {
    
    useEffect(() => {
        setUserLocal(JSON.parse(localStorage.getItem('res')));
    }, []);
    
    const navigate = useNavigate();
    const { login, error, isPending } = useLogin();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userLocal, setUserLocal] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        login(email, password);
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
                        <motion.div className={styles["login-form"]} onSubmit={submitHandler} initial="hidden" animate="visible" exit="exit" variants={loginPageVariants}>
                            <div className={styles["title-section"]}>
                                <motion.i onClick={() => navigate("/")} whileTap={{ scale: 0.6 }}><IoMdArrowRoundBack /></motion.i>
                                <h1>Login</h1>
                            </div>

                            <form className={styles["form-section"]}>
                                <input placeholder='Email' type="email" value={email} onChange={e => setEmail(e.target.value)} />
                                <input placeholder='Password' type="password" value={password} onChange={e => setPassword(e.target.value)} />

                                <div className={styles["signup-section"]}>
                                    <div>Don't have an account? <Link to="/signup"><div className='link'>Create an account</div></Link></div>
                                </div>

                                <motion.button className={styles["form-btn"]} onClick={submitHandler} whileTap={{ scale: 0.9 }} type="submit">
                                    <AnimatePresence key="loader">
                                        { isPending && <Loader /> }
                                    </AnimatePresence>
                                    
                                    <AnimatePresence>
                                        { !isPending && <Text text="OK" /> }
                                    </AnimatePresence>
                                </motion.button>
                            </form>
                        </motion.div>

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

export default Login;
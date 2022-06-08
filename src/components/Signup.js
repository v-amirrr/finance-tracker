import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useSignup } from "../hooks/useSignup";

import styles from "./Signup.module.css";

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

    return (
        <>
            <div>
                <form className={styles["signup-form"]}>
                    <h1>Sign Up</h1>

                    <div className={styles["form-section"]}>
                        {/* <label>Name:</label> */}
                        <input placeholder='Name' type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>

                    <div className={styles["form-section"]}>
                        {/* <label>Email:</label> */}
                        <input placeholder='Email' type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className={styles["form-section"]}>
                        {/* <label>Password:</label> */}
                        <input placeholder='Password' type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className={styles["form-section"]}>
                        {/* <label>Password Confirmation:</label> */}
                        <input placeholder='Confirm' type="password" value={repassword} onChange={e => setRepassword(e.target.value)} />
                    </div>

                    <div className={styles["login-section"]}>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>

                    <div className={styles["form-btn"]}>Sign Up</div>
                </form>
            </div> 
        </>
    );
};

export default Signup;
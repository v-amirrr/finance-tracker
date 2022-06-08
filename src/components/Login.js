import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import styles from "./Login.module.css";

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        console.log(email, password);
    }

    return (
        <>
            <div>
                <form className={styles["login-form"]} onSubmit={submitHandler}>
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

                    <div className={styles["form-btn"]}>Login</div>
                </form>
            </div>   
        </>
    );
};

export default Login;
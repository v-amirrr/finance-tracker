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
                    <div>Login</div>

                    <div>
                        <label>Email:</label>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div>
                        <p>Don't have an account? <Link to="/signup">Create one</Link></p>
                    </div>

                    <div>
                        <button type='submit'>Login</button>
                    </div>
                </form>
            </div>   
        </>
    );
};

export default Login;
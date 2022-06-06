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
                <form className={styles["signup-form"]} onSubmit={submitHandler}>
                    <div>Sign Up</div>

                    <div>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>

                    <div>
                        <label>Email:</label>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div>
                        <label>Repeat The Password:</label>
                        <input type="password" value={repassword} onChange={e => setRepassword(e.target.value)} />
                    </div>

                    <div>
                        <p>Already have an account? <Link to="/login">login</Link></p>
                    </div>

                    <div>
                        <button type='submit'>Login</button>
                    </div>
                </form>
            </div> 
        </>
    );
};

export default Signup;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from "./Signup.module.css";

const Signup = () => {

    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    const [passwordMatch, setPasswordMatch] = useState(true);

    const submitHandler = e => {
        e.preventDefault();
        if (password !== repassword) {
            setPasswordMatch(false);
        } else if (password === passwordMatch) {
            setPasswordMatch(true);
        }
    }

    return (
        <>
            <div>
                <form className={styles["signup-form"]} onSubmit={submitHandler}>
                    <div>Sign Up</div>

                    <div>
                        <label>Name:</label>
                        <input type="text" value={Name} onChange={e => setName(e.target.value)} />
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
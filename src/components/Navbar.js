import React from 'react';
import styles from "./Navbar.module.css";

import { useLogout } from "../hooks/useLogout";

const Navbar = () => {

    const { logout, error } = useLogout();

    return (
        <>
            <div className={styles["navbar"]}>
                <div>
                    <h1>Fianace Tracker</h1>
                </div>

                <div>
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
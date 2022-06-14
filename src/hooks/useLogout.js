import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import useAuthContext from "./useAuthContext";

import { projectAuth } from "../firebase/config";

export const useLogout = () => {

    const navigate = useNavigate();

    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);

    const { dispatch } = useAuthContext();

    const logout = async () => {
        setError(null);
        navigate("/loader");

        try {
            if(!isCancelled) {
                await projectAuth.signOut();
    
                dispatch({ type: "LOGOUT"});
                localStorage.clear();
    
                setError(null);
                setTimeout(() => {
                    navigate("/");
                }, 500);
            }
        }

        catch (err) {
            if(!isCancelled) {
                setError(err.massege);
                setTimeout(() => {
                    navigate("/");
                }, 500);
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    return { logout, error };
}
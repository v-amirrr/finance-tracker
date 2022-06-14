import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import useAuthContext from "./useAuthContext";

import { projectAuth } from "../firebase/config";

export const useLogin = () => {
 
    const navigate = useNavigate();

    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);

    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setError(null);
        navigate("/loader");

        try {
            if(!isCancelled) {
                const response = await projectAuth.signInWithEmailAndPassword(email, password);
    
                if (!response) {
                    throw new Error("Couldn't Login");
                }
    
                dispatch({ type: "LOGIN", payload: response.user});
    
                setError(null);
                setTimeout(() => {
                    navigate("/");
                }, 500);
            }
        }
        
        catch (err) {
            setError(err.message);
            setTimeout(() => {
                navigate("/");
            }, 500);
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    return { login, error };
}
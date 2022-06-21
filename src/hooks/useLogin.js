import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import useAuthContext from "./useAuthContext";

import { projectAuth } from "../firebase/config";

export const useLogin = () => {
 
    const navigate = useNavigate();
    const { dispatch } = useAuthContext();
    
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const login = async (email, password) => {
        setIsPending(true);
        setError(null);
        
        try {
            if (!isCancelled) {
                const response = await projectAuth.signInWithEmailAndPassword(email, password);
    
                if (!response) {
                    throw new Error("Couldn't Login.");
                }
    
                dispatch({ type: "LOGIN", payload: response.user });
        
                setError(null);
                setIsPending(false);
                navigate("/");
            }
        }
    
        catch (err) {
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
            setTimeout(() => {
                setError(null);
            }, 4000);
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    return { login, error, isPending };
}
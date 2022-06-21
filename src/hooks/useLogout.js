import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import useAuthContext from "./useAuthContext";

import { projectAuth } from "../firebase/config";

export const useLogout = () => {

    const navigate = useNavigate();
    const { dispatch } = useAuthContext();

    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const logout = async () => {
        setIsPending(true);
        setError(null);

        try {
            if(!isCancelled) {
                await projectAuth.signOut();
    
                dispatch({ type: "LOGOUT"});
                localStorage.clear();
                
                setError(null);
                navigate("/");
                setIsPending(false);
                
            }
        }

        catch (err) {
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
            setTimeout(() => {
                setError(null);
            }, 6000);
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    return { logout, error, isPending };
}
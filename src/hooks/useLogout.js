import { useState, useEffect } from "react";

import { useAuthContext } from "./useAuthContext";

import { projectAuth } from "../firebase/config";

export const useLogout = async () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const { dispatch } = useAuthContext();

    const logout = async () => {
        setError(null);
        setIsPending(true);

        try {
            if(!isCancelled) {
                await projectAuth.signOut();
    
                dispatch({ type: "LOGOUT"});
    
                setError(null);
                setIsPending(false);
            }
        }

        catch (err) {
            if(!isCancelled) {
                console.log(err);
                setError(err.massege);
                setIsPending(false);
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    return { logout, error, isPending };
}
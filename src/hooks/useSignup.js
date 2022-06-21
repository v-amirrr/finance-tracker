import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import useAuthContext from "./useAuthContext";

import { projectAuth } from "../firebase/config";

export const useSignup = () => {
 
    const navigate = useNavigate();
    const { dispatch } = useAuthContext();

    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const signup = async (email, password, name, repassword) => {
        setIsPending(true);
        setError(null);

        if (password == repassword && name) {            
            try {
                if(!isCancelled) {
                    const response = await projectAuth.createUserWithEmailAndPassword(email, password);
        
                    if (!response) {
                        throw new Error("Couldn't Sign Up");
                    }
        
                    await response.user.updateProfile({ displayName: name });
        
                    dispatch({ type: "LOGIN", payload: response.user});
        
                    setError(null);
                    setIsPending(false);
                    navigate("/", { replace: true });
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
        } else {
            let pageError;
            if (!name && password != repassword) {
                pageError = "Passwords Don't Match, And Please Enter The Name.";
            } else if (!name) {
                pageError = "Please Enter The Name.";
            } else if (password != repassword) {
                pageError = "Passwords Don't Match.";
            }
            setError(pageError);
            setIsPending(false);
            setTimeout(() => {
                setError(null);
            }, 4000);
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    return { signup, error, isPending };
}
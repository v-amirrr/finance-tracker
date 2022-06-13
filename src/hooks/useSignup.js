import { useState } from "react";

import { useNavigate } from "react-router-dom";

import useAuthContext from "./useAuthContext";

import { projectAuth } from "../firebase/config";

export const useSignup = () => {
 
    const navigate = useNavigate();

    const [error, setError] = useState(null);

    const { dispatch } = useAuthContext();

    const signup = async (email, password, name) => {
        setError(null);
        navigate("/loader")

        try {
            const response = await projectAuth.createUserWithEmailAndPassword(email, password);

            if (!response) {
                throw new Error("Couldn't Sign Up");
            }

            await response.user.updateProfile({ displayName: name });

            dispatch({ type: "LOGIN", payload: response.user});

            setError(null);
            setTimeout(() => {
                navigate(-1);
            }, 1000);
        }
        
        catch (err) {
            setError(err.message);
            setTimeout(() => {
                navigate(-1);
            }, 1000);
        }
    }

    return { signup, error };
}
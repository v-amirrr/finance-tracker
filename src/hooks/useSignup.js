import { useState, useContext } from "react";

import { projectAuth } from "../firebase/config";

import { LoadingShow } from "../context/LoadingShowContextProvider";

export const useSignup = () => {
    const LoadingShowContext = useContext(LoadingShow);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const signup = async (email, password, name) => {
        setError(null);
        setIsPending(true);

        try {
            const response = await projectAuth.createUserWithEmailAndPassword(email, password);
            console.log(response.user);

            if (!response) {
                throw new Error("Couldn't Sign Up");
            }

            await response.user.updateProfile({ displayName: name });
        }
        
        catch (err) {
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
        }
    }

    if (isPending) {
        LoadingShowContext.setShow(true);
    } else if (!isPending) {
        setTimeout(() => {
            LoadingShowContext.setShow(false);
        }, 1000);
    }

    return { error, signup };
}
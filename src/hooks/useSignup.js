import { useState } from "react";
import { projectAuth } from "../firebase/config";

export const useSignup = () => {
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
            setIsPending(false)
        }
    }

    return { error, isPending, signup };
}
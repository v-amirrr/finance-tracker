import React, { createContext, useReducer } from 'react';

export const AuthContext = createContext();

const initialState = {
    user: null,
}

const authReducer = (state, action) => {
    switch (action.type) {
        case "SIGN_UP":
            return { ...state, user: action.payload }

        case "LOGOUT":
            return { ...state, user: null }

        default:
            return state;
    }
}

const AuthContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, initialState);
    console.log(state)

    return (
        <>
            <AuthContext.Provider value={{ ...state, dispatch}}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export default AuthContextProvider;
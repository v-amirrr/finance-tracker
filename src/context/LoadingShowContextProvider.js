import React, { createContext, useState } from 'react';

export const LoadingShow = createContext();

const LoadingShowContextProvider = ({children}) => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <LoadingShow.Provider value={{show, setShow}}>
                {children}
            </LoadingShow.Provider>
        </div>
    );
};

export default LoadingShowContextProvider;
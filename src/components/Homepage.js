import React from 'react';

import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <>
            <div>
                <Link to="/login">Start For Free</Link>
            </div>
        </>
    );
};

export default Homepage;
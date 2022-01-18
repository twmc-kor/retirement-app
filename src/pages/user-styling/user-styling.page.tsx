import React from 'react';
import { Link } from 'react-router-dom';

const UserStylingPage = (): JSX.Element => {
    return (
        <div>
            <h1>USER-STYLING PAGE</h1>
            <Link to="/message">캐릭터</Link>
        </div>
    );
};

export default UserStylingPage;

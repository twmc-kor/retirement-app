import React from 'react';
import { Link } from 'react-router-dom';

const MessagePage = (): JSX.Element => {
    return (
        <div>
            <h1>MESSAGE PAGE</h1>
            <Link to="/loading">저장</Link>
        </div>
    );
};

export default MessagePage;

import React from 'react';
import { Link } from 'react-router-dom';

const IndexPage = (): JSX.Element => {
    return (
        <div>
            <h1>INDEX PAGE</h1>
            <Link to="/class-room">입장하기</Link>
        </div>
    );
};

export default IndexPage;

import React from 'react';
import { Link } from 'react-router-dom';

const ClassRoomPage = (): JSX.Element => {
    return (
        <div>
            <h1>CLASS-ROOM PAGE</h1>
            <Link to="/user-styling">메세지 쓰기</Link>
        </div>
    );
};

export default ClassRoomPage;

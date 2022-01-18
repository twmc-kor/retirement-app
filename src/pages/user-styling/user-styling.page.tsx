import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components';
import { Wrapper } from '../../components/styles';

const UserStylingPage = (): JSX.Element => {
    return (
        <Wrapper>
            <Header back title="꽃길레터" />
            <Link to="/message">캐릭터</Link>
        </Wrapper>
    );
};

export default UserStylingPage;

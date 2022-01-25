import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/styles';

const LoadingPage = (): JSX.Element => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/class-room'), 3000);
    }, []);
    return <Icon src="/img/loading_img.svg" width="100%" height="100%" />;
};

export default LoadingPage;

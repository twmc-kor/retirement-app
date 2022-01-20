import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components/styles';

const Loading = (): JSX.Element => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/'), 3000);
    }, []);
    return <Icon src="/img/loading_img.png" width="100%" height="100%" />;
};

export default Loading;

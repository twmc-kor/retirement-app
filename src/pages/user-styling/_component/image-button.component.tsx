import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ImageTypeEnum } from '../../../components/interface';
import { DefaultButton, Icon, Wrapper } from '../../../components/styles';

export const ImageButton: FC = () => {
    const navigate = useNavigate();

    const handleMovePage = () => {
        navigate('/main/message');
    };
    return (
        <Wrapper button>
            {Object.values(ImageTypeEnum).map((item, index) => (
                <ButtonWrapper
                    key={`image-type_${index}`}
                    onClick={handleMovePage}
                >
                    <Icon src={item} width="100%" height="100%" />
                </ButtonWrapper>
            ))}
        </Wrapper>
    );
};

const ButtonWrapper = styled(DefaultButton)`
    width: 96px;
    height: 112px;
    cursor: pointer;
`;

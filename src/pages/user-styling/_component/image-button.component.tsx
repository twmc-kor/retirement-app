import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ImageTypeEnum } from '../../../components/interface';
import { DefaultButton, Icon, Wrapper } from '../../../components/styles';
import { useAnalytics } from '../../../hooks/useAnalytics.hook';
import { AnalyticsScreenEnum, AnalyticsTypeEnum } from '../../../services';

export const ImageButton: FC = () => {
    const navigate = useNavigate();

    const logEvent = useAnalytics(AnalyticsScreenEnum.USER_STYLING);

    const handleMovePage = (item: ImageTypeEnum) => {
        const userType = item
            .replace('/img/user-type/', '')
            .replace('.svg', '');

        logEvent(AnalyticsTypeEnum.ENTER_SCREEN);
        logEvent(AnalyticsTypeEnum.SELECT_IMAGE);

        navigate(`/main/message/${userType}`);
    };
    return (
        <Wrapper button>
            {Object.values(ImageTypeEnum).map((item, index) => (
                <ButtonWrapper
                    key={`image-type_${index}`}
                    onClick={() => handleMovePage(item)}
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

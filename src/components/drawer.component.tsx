import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { Styles } from '../style/styles';
import { IDrawer } from './interface';
import { DefaultButton, Icon } from './styles';

export const Drawer: FC<IDrawer> = ({ open, close }) => {
    return (
        <>
            <DrawerBg visible={open} />
            <Wrapper visible={open}>
                <IconWrapper onClick={close}>
                    <Icon src="/img/icon/wt_close_btn.svg" />
                </IconWrapper>
                <TextWrapper>
                    <TitleText>꽃길 레터</TitleText>
                    <Text>이 프로젝트에</Text>
                    <Text>함께 해주셔서 감사합니다.</Text>
                    <br />
                    {/* <Text>메세지 전달 상황이</Text>
                    <Text>궁금하시다면,</Text>
                    <Text>2/18일 이후에도</Text>
                    <Text>이곳에 들러주세요!</Text>
                    <Text>전달 후기를</Text>
                    <Text>업데이트 해둘게요 :)</Text>
                    <br /> */}
                    <Text>혹시나 이런 이벤트가</Text>
                    <Text>필요하시다면</Text>
                    <Text>연락주세요 :)</Text>
                    <br />
                    <Text>
                        총괄&서버는 아들 <strong>은호</strong>가,
                    </Text>
                    <Text>프론트작업은 딸 은지가,</Text>
                    <Text>디자인은 제자 혜서가</Text>
                    <div>
                        <Text>작업한 프로젝트입니다</Text>
                        <Icon
                            src="/img/icon/smile.png"
                            width="10px"
                            height="10px"
                            marginLeft="3px"
                            filterColor
                        />
                    </div>
                </TextWrapper>
                <ImgWrapper>
                    <NameWrapper>
                        <Name>은호</Name>
                        <Name>은지</Name>
                        <Name>혜서</Name>
                    </NameWrapper>
                    <Icon src="/img/makers.svg" width="135px" height="71" />
                </ImgWrapper>
            </Wrapper>
        </>
    );
};

const DrawerBgVisible = keyframes`
  from {
        opacity: 0;
    }
    to {
        opacity: 0.5;
    }
`;

const DrawerAniShow = keyframes`
from {
    right: -167px;
}
to{
    right: 0;
}
`;

const DrawerBg = styled.div<{ visible?: boolean | null }>`
    z-index: 10;
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
    background-color: #4f4f4f;
    opacity: 0.7;
    align-items: center;
    overflow: hidden;
    animation: ${DrawerBgVisible} 0.3s;
`;

const Wrapper = styled.div<{ visible?: boolean | null }>`
    z-index: 50;
    position: absolute;
    top: 0;
    right: 0;
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
    width: 167px;
    height: 100vh;
    background-color: ${Styles.COLOR.HEADER};
    transition: width all 0.5s;
    animation: ${DrawerAniShow} 0.5s ease;
`;

const IconWrapper = styled(DefaultButton)`
    position: absolute;
    top: 17px;
    right: 21px;
`;

const ImgWrapper = styled.div`
    position: absolute;
    bottom: -5px;
    right: 15px;
`;

const NameWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px 0 15px;
`;

const Name = styled.span`
    ${Styles.FONT.NOTI_TEXT};
    color: ${Styles.COLOR.WHITE};
    cursor: default;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 20px;
    margin-top: 120px;
`;

const TitleText = styled.div`
    margin-bottom: 50px;
    ${Styles.FONT.TITLE_NAME};
    color: ${Styles.COLOR.WHITE};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Text = styled.span`
    ${Styles.FONT.NOTI_TEXT};
    line-height: 20px;
    color: ${Styles.COLOR.WHITE};
    cursor: default;
`;

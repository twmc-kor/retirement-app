import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
    IndexPage,
    OnboardingPage,
    ClassRoomPage,
    MessagePage,
    NotFoundPage,
    UserStylingPage,
    Loading,
} from '../pages';

const MainApp = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`/`} element={<IndexPage />} />
                <Route path={`/onboarding`} element={<OnboardingPage />} />
                <Route path={`/class-room`} element={<ClassRoomPage />} />
                <Route path={`/user-styling`} element={<UserStylingPage />} />
                <Route path={`/message`} element={<MessagePage />} />
                <Route path={`/loading`} element={<Loading />} />
                <Route element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainApp;

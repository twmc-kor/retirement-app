import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
    IndexPage,
    ClassRoomPage,
    OnboardingPage,
    LoadingPage,
    UserStylingPage,
    MessagePage,
    NotFoundPage,
} from '../pages';
import MainPage from '../pages/main/main.page';

const MainApp = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="onboarding" element={<OnboardingPage />} />
                <Route path="loading" element={<LoadingPage />} />
                <Route path="main" element={<MainPage />}>
                    <Route path="class-room" element={<ClassRoomPage />} />
                    <Route path="user-styling" element={<UserStylingPage />} />
                    <Route
                        path="message/:imageType"
                        element={<MessagePage />}
                    />
                </Route>
                <Route element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainApp;

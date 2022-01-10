import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ClassRoomPage,
  IndexPage,
  MessagePage,
  NotFoundPage,
  UserStylingPage,
} from "../pages";
import MessageSendedPage from "../pages/message-sended/message-sended.page";

const MainApp = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<IndexPage />} />
        <Route path={`/class-room`} element={<ClassRoomPage />} />
        <Route path={`/user-styling`} element={<UserStylingPage />} />
        <Route path={`/message`} element={<MessagePage />} />
        <Route path={`/message-sended`} element={<MessageSendedPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainApp;

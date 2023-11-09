import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './page/mainPage.jsx';
import LoginPage from './page/LoginPage.jsx';
import UploadPage from './page/UploadPage.jsx';
import ContributePage from './page/ContributePage.jsx';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/mainpage" element={<MainPage />} />
                <Route path="/loginpage" element={<LoginPage />} />
                <Route path="/uploadpage" element={<UploadPage />} />
                <Route path="/contributepage" element={<ContributePage />} />
            </Routes>
        </BrowserRouter>
    );
};

function App() {
    return (
        <Router />
    );
}

export default App

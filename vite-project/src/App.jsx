import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './page/MainPage.jsx';
import { LoginPage } from './page/LoginPage.jsx';
import { RegisterPage } from './page/RegisterPage.jsx';
import UploadPage from './page/UploadPage.jsx';
import ContributePage from './page/ContributePage.jsx';
import { TestPage } from './test/TestPage.jsx';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/upload" element={<UploadPage />} />
                <Route path="/contribute" element={<ContributePage />} />
                <Route path="/testpage" element={<TestPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default function App() {
    return (
        <Router />
    );
}


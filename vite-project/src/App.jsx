import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './page/mainPage.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/mainpage" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App

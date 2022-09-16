import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import LoginPage from './Components/LoginPage/';
import Profile from './Components/Profile';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="/profile/" element={<Profile />} />
            </Routes>
        </HashRouter>
    );
}

export default App;

import { Routes, Route } from 'react-router-dom'
import { Homepage } from '../pages';
import { Navbar } from '../components';
import './style/main.scss';

export const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path={'/'} element={<Homepage />} />
            </Routes>
        </>
    )
}


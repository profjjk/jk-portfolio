import { Routes, Route } from 'react-router-dom'
import { Homepage, Work } from '../pages';
// import { Navbar } from '../components';
import './style/main.scss';

export const App = () => {
    return (
        <>
            {/*<Navbar />*/}
            <Routes>
                <Route path={'/'} element={<Homepage />} />
                {/*<Route path={'/work'} element={<Work />} />*/}
            </Routes>
        </>
    )
}
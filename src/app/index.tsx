import { Routes, Route } from 'react-router-dom'
import { Homepage, Metronics, PriceSpider, ReactChallenges, ServiceCenter } from '../pages';
import './style/main.scss';

export const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Homepage />} />
                <Route path={'/pricespider'} element={<PriceSpider />} />
                <Route path={'/service-center'} element={<ServiceCenter />} />
                <Route path={'/metronics'} element={<Metronics />} />
                <Route path={'/react-challenges'} element={<ReactChallenges />} />
            </Routes>
        </>
    )
}
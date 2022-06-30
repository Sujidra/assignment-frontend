import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.css';


//CUSTOM IMPORTS
import LandingPage from "../Pages/LandingPage.js";
import Login from "../Pages/AuthPages/Login/index.js";
import Register from "../Pages/AuthPages/Register/index.js";
import PrivateRoute from './HOC/PrivateRouter.js';
import PublicRouter from './HOC/publicRouter.js';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PublicRouter><Login /></PublicRouter>} exact={true} />
                <Route path="/register" element={<PublicRouter><Register /></PublicRouter>} />
                <Route path="/home" element={<PrivateRoute><LandingPage /></PrivateRoute>} />
            </Routes>
        </BrowserRouter>

    )
}

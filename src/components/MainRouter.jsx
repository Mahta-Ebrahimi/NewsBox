import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router'
import Home from "../pages/Home";
import Archive from './../pages/Archive';
import Setting from './../pages/Setting';

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/setting" element={<Setting />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MainRouter;
import { Route, Routes } from "react-router-dom";

import ProductMenu from "./page/ProductMenu";
import User from "./page/User";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/user" element={<User />} />
            <Route path="/productMenu" element={<ProductMenu />} />
        </Routes>
    )
}
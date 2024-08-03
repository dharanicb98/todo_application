
import { Route, Routes } from "react-router-dom";
import SignInPage from "../pages/signin";
import SignUpPage from "../pages/signup";
import Home from "../pages/home";

const ProtectedRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<SignInPage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
        </Routes>
    )
}

export default ProtectedRoutes;
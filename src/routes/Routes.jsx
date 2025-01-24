import { createBrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import MainLayout from "../layouts/MainLayout";

import Profile from "../pages/Profile";

import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";
import ErrorPage from "../pages/ErrorPage";

import LandingPage from "../pages/LandingPage";
import PackageCreation from "../pages/PackageCreation/PackageCreation";
import Parent from "../pages/LoginRegister/Parent";
import CartPage from "../pages/CartPage/CartPage";
import DashBoard from "../pages/DashBoard/DashBoard";


const router = createBrowserRouter([    
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: (
                    <>
                        <Helmet>
                            <title>Xam - Home</title>
                        </Helmet>
                        <LandingPage></LandingPage>
                    </>
                ),
            },
            
            {
                path: "/package-creation",
                element: (
                    <>
                        <Helmet>
                            <title>Xam - Package Creation</title>
                        </Helmet>
                        <PackageCreation></PackageCreation>
                    </>
                ),
            },
            {
                path: "/cart-page",
                element: (
                    <>
                        <Helmet>
                            <title>Xam - Cart</title>
                        </Helmet>
                        <CartPage></CartPage>
                    </>
                ),
            },
            
            {
                path: "/dashboard",
                element: (
                    <>
                        <Helmet>
                            <title>Xam - Dashboard</title>
                        </Helmet>
                        <DashBoard></DashBoard>
                    </>
                ),
            },
            
           
      
           
           
           
            {
                path: "/",
                element: (
                    <>
                        <Helmet>
                            <title>Xam - Add Review</title>
                        </Helmet>
                        <PrivateRoute>
                           {/* write a component  */}
                        </PrivateRoute>
                    </>
                ),
            },
           
           
         
            {
                path: "/login-register",
                element: (
                    <>
                        <Helmet>
                            <title>Xam - Login</title>
                        </Helmet>
                        <Parent></Parent>
                    </>
                ),
            },
           
            {
                path: "/my-profile",
                element: (
                    <>
                        <Helmet>
                            <title>Xam - My Profile</title>
                        </Helmet>
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    </>
                ),
            },
            {
                path: "/update-profile",
                element: (
                    <>
                        <Helmet>
                            <title>Xam - Update Profile</title>
                        </Helmet>
                        <PrivateRoute>
                            <UpdateProfile />
                        </PrivateRoute>
                    </>
                ),
            },
           
           
        ],
    },
    {
        path: "*",
        element: (
            <>
                <Helmet>
                    <title>Xam - Error</title>
                </Helmet>
                <ErrorPage />
            </>
        ),
    },
    
  
]);

export default router;
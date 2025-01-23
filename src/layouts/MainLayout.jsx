




import React from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFirebaseAuth } from "../Auth/AuthProvider";
import { FaSpinner } from "react-icons/fa";
import { ThemeProvider } from "../Auth/ThemeContext";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // TanStack Query

import Header from "../components/Header/Header";
import {store} from "../store/store";
import Footer from "../components/Footer/Footer";


const queryClient = new QueryClient();



const MainLayout = () => {
  const { user, loading } = useFirebaseAuth();
  const location = useLocation(); // Get the current route

  // List of routes where Header and Footer should NOT appear
  const noHeaderFooterRoutes = ["/login-register"];

  // Check if current route matches any route in the list
  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <div className="font_poppins">
            <ToastContainer />
            {loading ? (
              <div className="flex justify-center items-center min-h-screen">
                <FaSpinner className="animate-spin text-4xl text-[#A91D3A]" />
              </div>
            ) : (
              <>
                {!hideHeaderFooter && <Header />}
                <div className="h-fit">
                  <Outlet />
                </div>
                {!hideHeaderFooter && <Footer></Footer>}
              </>
            )}
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default MainLayout;

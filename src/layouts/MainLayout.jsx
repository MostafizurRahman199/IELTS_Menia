




import React from "react";

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
import SecondaryFooter from "../components/Footer/SecondaryFooter";


const queryClient = new QueryClient();



const MainLayout = () => {
  const { user, loading } = useFirebaseAuth();
  const location = useLocation(); // Get the current route

  // List of routes where Header and Footer should NOT appear
  const noHeaderFooterRoutes = ["/login-register", ];
  const noFooterRoutes = ["/login-register", "/package-creation", "/cart-page","/dashboard"]

  // Check if current route matches any route in the list
  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);   
  const hideFooter = noFooterRoutes.includes(location.pathname);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <div className="font_poppins">
            <ToastContainer />
            {loading ? (
              <div className="flex justify-center items-center min-h-screen">
                <FaSpinner className="animate-spin text-4xl text-[#0052CC]" />
              </div>
            ) : (
              <>
                {!hideHeaderFooter && <Header />}
                <div className={`h-fit ${location.pathname == "/login-register" ? "pt-0" : "pt-20" }`}>
                  <Outlet />
                </div>
                {
                 location.pathname === "/login-register" ? <></> : ( hideFooter  ? <SecondaryFooter></SecondaryFooter>  : <Footer></Footer>)
                
               }
              </>
            )}
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default MainLayout;

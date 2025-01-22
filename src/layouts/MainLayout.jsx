// import React from "react";
// import Navbar from "./Navbar";
// import { Outlet } from "react-router-dom";
// import Footer from "./Footer";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useFirebaseAuth } from "../Auth/AuthProvider";
// import { FaSpinner } from "react-icons/fa";
// import { ThemeProvider } from "../Auth/ThemeContext";
// import { Provider } from "react-redux";

// import Header from "../components/Header/Header";
// import store from "../store/store";

// const MainLayout = () => {
//   const { user, loading } = useFirebaseAuth();
//   return (
//     <Provider store={store}>
//       <ThemeProvider>
//         <div className="font_poppins">
//           <ToastContainer />
//           {loading ? (
//             <div className="flex justify-center items-center min-h-screen">
//               <FaSpinner className="animate-spin text-4xl text-[#A91D3A]" />
//             </div>
//           ) : (
//             <>
//               <Header></Header>
//               <div className="">
//                 <Outlet />
//               </div>
//               <Footer />
//             </>
//           )}
//         </div>
//       </ThemeProvider>
//     </Provider>
//   );
// };

// export default MainLayout;




import React from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFirebaseAuth } from "../Auth/AuthProvider";
import { FaSpinner } from "react-icons/fa";
import { ThemeProvider } from "../Auth/ThemeContext";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // TanStack Query

import Header from "../components/Header/Header";
import {store} from "../store/store";

// Create a QueryClient instance
const queryClient = new QueryClient();

// const MainLayout = () => {
//   const { user, loading } = useFirebaseAuth();

//   return (
//     <Provider store={store}>
//       <QueryClientProvider client={queryClient}>
//         <ThemeProvider>
//           <div className="font_poppins">
//             <ToastContainer />
//             {loading ? (
//               <div className="flex justify-center items-center min-h-screen">
//                 <FaSpinner className="animate-spin text-4xl text-[#A91D3A]" />
//               </div>
//             ) : (
//               <>
//                 <Header />
//                 <div className="">
//                   <Outlet />
//                 </div>
//                 <Footer />
//               </>
//             )}
//           </div>
//         </ThemeProvider>
//       </QueryClientProvider>
//     </Provider>
//   );
// };

// export default MainLayout;
// i




// import React from "react";
// import { Outlet, useLocation } from "react-router-dom"; // Import useLocation
// import { Provider } from "react-redux";
// import { QueryClientProvider } from "@tanstack/react-query";
// import { ThemeProvider } from "styled-components";
// import { ToastContainer } from "react-toastify";
// import { FaSpinner } from "react-icons/fa";
// import Header from "./Header";
// import Footer from "./Footer";
// import { store } from "./store";
// import { queryClient } from "./queryClient";
// import { useFirebaseAuth } from "./hooks/useFirebaseAuth";

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
                {!hideHeaderFooter && <Footer />}
              </>
            )}
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default MainLayout;

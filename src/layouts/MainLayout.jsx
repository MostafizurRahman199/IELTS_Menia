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
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFirebaseAuth } from "../Auth/AuthProvider";
import { FaSpinner } from "react-icons/fa";
import { ThemeProvider } from "../Auth/ThemeContext";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // TanStack Query

import Header from "../components/Header/Header";
import store from "../store/store";

// Create a QueryClient instance
const queryClient = new QueryClient();

const MainLayout = () => {
  const { user, loading } = useFirebaseAuth();

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
                <Header />
                <div className="">
                  <Outlet />
                </div>
                <Footer />
              </>
            )}
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default MainLayout;


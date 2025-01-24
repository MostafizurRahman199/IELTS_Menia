# Frontend Developer Task

This project implements a **Landing Page**, **Popular Courses Section**, **Package Creation Page**, **Cart Functionality**, **Authentication System**, and a **Dashboard**. It adheres to the provided Figma design and API documentation.

---

## 🔥 Features
1. **Landing Page**:
   - Fully responsive design based on the Figma mockup.
   - Dynamic "Popular Courses" section fetched from the API.
2. **Package Creation Page**:
   - Drag-and-drop interface to create custom packages.
   - "Create Package" button to add created packages to the cart.
3. **Cart Functionality**:
   - Manage selected courses/packages in the cart.
   - Edit, remove, or submit the cart items.
   - Submission is restricted to authenticated users.
4. **Authentication System**:
   - Login and registration pages with backend integration.
   - Ensures only logged-in users can submit cart data.
5. **Dashboard**:
   - Displays user-submitted packages with their details and statuses.
6. **Animations**:
   - Smooth animations using **AOS (Animate On Scroll)** library.

---

## 🌐 Live Link

**[Visit Live Site](https://xam-ielts-by-mostafiz.netlify.app/)**

---

## 💻 Technologies Used

### Frontend
- **React**: Framework for building UI.
- **Vite**: Modern build tool for fast development.
- **Redux Toolkit**: State management.
- **React Router**: Client-side routing.
- **TanStack Query**: For data fetching.
- **Axios**: HTTP client for API requests.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **DaisyUI**: Component library for Tailwind CSS.
- **AOS (Animate On Scroll)**: For animations.
- **Lottie React**: For animated illustrations.
- **React Beautiful DnD**: Drag-and-drop functionality.
- **React Toastify**: Notifications.
- **SweetAlert2**: Modals and alerts.

### Backend Integration
- **REST API**: Backend API for fetching data and user interactions.

### Development Tools
- **ESLint**: Linting and code quality.
- **PostCSS**: CSS processing.
- **Prettier**: Code formatting.

---

## 📦 Dependencies

### **Main Dependencies**
```json
{
  "@dnd-kit/core": "^6.3.1",
  "@heroicons/react": "^2.2.0",
  "@material-tailwind/react": "^2.1.10",
  "@reduxjs/toolkit": "^2.5.0",
  "@tanstack/react-query": "^5.64.2",
  "@tanstack/react-router": "^1.87.1",
  "aos": "^2.3.4",
  "axios": "^1.7.8",
  "firebase": "^11.0.2",
  "localforage": "^1.10.0",
  "lottie-react": "^2.4.0",
  "match-sorter": "^8.0.0",
  "react": "^18.3.1",
  "react-beautiful-dnd": "^13.1.1",
  "react-copy-to-clipboard": "^5.1.0",
  "react-countup": "^6.5.3",
  "react-dom": "^18.3.1",
  "react-fast-marquee": "^1.6.5",
  "react-helmet": "^6.1.0",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^5.3.0",
  "react-redux": "^9.2.0",
  "react-router-dom": "^6.28.0",
  "react-simple-typewriter": "^5.0.1",
  "react-toastify": "^10.0.6",
  "react-tooltip": "^5.28.0",
  "sort-by": "^1.2.0",
  "sweetalert2": "^11.15.10"
}

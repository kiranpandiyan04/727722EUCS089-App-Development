// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './sections/Home';
// import Services from './sections/Services';
// import AboutUs from './sections/AboutUs';
// import Contact from './sections/Contact';
// import Login from './components/Login';   // Ensure path matches your directory structure
// import Signup from './components/Signup'; // Ensure path matches your directory structure
// import Navbar from './components/Navbar';
// import { AuthProvider } from './AuthContext'; // Ensure path matches your directory structure

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<MainPage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// const MainPage = () => {
//   return (
//     <>
//       <Home />
//       <Services />
//       <AboutUs />
//       <Contact />
//     </>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './sections/Home';
import Services from './sections/Services';
import AboutUs from './sections/AboutUs';
import Contact from './sections/Contact';
import LoginSignup from './sections/LoginSignup';
import Navbar from './components/Navbar';
import { AuthProvider } from './AuthContext';

const App = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login-signup';

  return (
    <AuthProvider>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login-signup" element={<LoginSignup />} />
      </Routes>
    </AuthProvider>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;


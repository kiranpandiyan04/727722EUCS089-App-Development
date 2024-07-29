// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../AuthContext';

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);

//   return (
//     <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <a href="/" className="text-white text-lg font-bold">Party Management</a>
//         <ul className="flex space-x-4">
//           <li><a href="#home" className="text-white hover:text-gray-400">Home</a></li>
//           <li><a href="#services" className="text-white hover:text-gray-400">Services</a></li>
//           <li><a href="#about-us" className="text-white hover:text-gray-400">About Us</a></li>
//           <li><a href="#contact" className="text-white hover:text-gray-400">Contact</a></li>
//           {user ? (
//             <>
//               <li className="text-white">{user.email}</li>
//               <li>
//                 <button onClick={logout} className="text-white hover:text-gray-400">Logout</button>
//               </li>
//             </>
//           ) : (
//             <>
//               <li><Link to="/login" className="text-white hover:text-gray-400">Login</Link></li>
//               <li><Link to="/signup" className="text-white hover:text-gray-400">Signup</Link></li>
//             </>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// Navbar.js
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  const isAuthPage = location.pathname === '/login-signup';

  return (
    <nav className="fixed w-full top-0 bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold">
          <Link to="/">Home</Link>
        </div>
        {!isAuthPage && (
          <div className="flex space-x-4">
            <Link to="/services">Services</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact">Contact</Link>
            {user ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <Link to="/login-signup">Login/Signup</Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

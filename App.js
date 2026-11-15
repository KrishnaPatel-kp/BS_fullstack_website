// import { Navigate, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Home from './pages/Home';
// import { useState } from 'react';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const PrivateRoute = ({ element }) => {
//     return isAuthenticated ? element : <Navigate to="/" />;
//   }

//   return (
//     <div className="App">
//       <Header />
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
        
//         {/* Private Routes */}
//         <Route path="/home" element={<PrivateRoute element={<Home />} />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { useState, useEffect } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />

        {/* Private Routes */}
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </div>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Header from './components/Header';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Home from './pages/Home';
// import { useNavigate } from 'react-router-dom';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     setIsAuthenticated(!!token);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('loggedInUser');
//     setIsAuthenticated(false);
//     navigate('/');
//   };

//   const PrivateRoute = ({ element }) => {
//     return isAuthenticated ? element : <Navigate to="/" />;
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
//         <Routes>
//           <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
//           <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//           <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
//           <Route path="/home" element={<PrivateRoute element={<Home isAuthenticated={isAuthenticated} />} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

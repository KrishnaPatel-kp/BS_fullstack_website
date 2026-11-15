// import React, { useState, useEffect } from 'react';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
// import { FaBars, FaUser, FaHeart, FaShoppingCart, FaWhatsapp, FaSearch } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';

// function Header() {
//   const [showOffcanvas, setShowOffcanvas] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if user is logged in by checking for a token in local storage
//     const token = localStorage.getItem('token');
//     setIsLoggedIn(!!token);
//   }, []);

//   const handleLogout = () => {
//     // Clear user authentication data
//     localStorage.removeItem('token');
//     localStorage.removeItem('loggedInUser');
//     setIsLoggedIn(false);
//     navigate('/'); // Redirect to home page
//   };

//   const handleClose = () => setShowOffcanvas(false);
//   const handleShow = () => setShowOffcanvas(true);

//   return (
//     <Navbar bg="light" expand="lg" className="py-3">
//       <Container>
//         {/* Left side: Logo */}
//         <Navbar.Brand as={Link} to="/" style={{ fontFamily: 'Great Vibes, cursive', fontSize: '40px', color: '#c6605d' }}>
//           Bridal's Studio
//         </Navbar.Brand>

//         {/* Center: Search bar with icon */}
//         <div className="d-none d-lg-block mx-auto" style={{ width: '500px' }}>
//           <InputGroup>
//             <FormControl
//               placeholder="Search products..."
//               aria-label="Search products"
//             />
//             <InputGroup.Text style={{ background: 'none', border: 'none', color: 'black' }}>
//               <FaSearch size={20} style={{ cursor: 'pointer' }} />
//             </InputGroup.Text>
//           </InputGroup>
//         </div>

//         {/* Right side: Desktop Icons */}
//         <Nav className="ml-auto d-none d-lg-flex align-items-center">
//           <Dropdown>
//             <Dropdown.Toggle variant="light" id="dropdown-basic" className="p-0" style={{ border: 'none', background: 'none' }}>
//               <FaUser size={20} />
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//               {isLoggedIn ? (
//                 <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
//               ) : (
//                 <>
//                   <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
//                   <Dropdown.Item as={Link} to="/signup">Signup</Dropdown.Item>
//                 </>
//               )}
//             </Dropdown.Menu>
//           </Dropdown>

//           <Nav.Link href="#wishlist">
//             <FaHeart size={20} />
//           </Nav.Link>
//           <Nav.Link href="#cart">
//             <FaShoppingCart size={20} />
//           </Nav.Link>
//           <Nav.Link href="https://web.whatsapp.com/918469210000" target="_blank" rel="noopener noreferrer" onClick={handleClose} style={{ color: 'green' }}>
//             <FaWhatsapp size={20} />
//           </Nav.Link>
//         </Nav>

//         {/* Hamburger menu button for mobile */}
//         <div className="d-lg-none ml-auto">
//           <FaBars size={25} onClick={handleShow} />
//         </div>
//       </Container>

//       {/* Offcanvas menu for mobile */}
//       <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Menu</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Nav className="flex-column">
//             {isLoggedIn ? (
//               <Nav.Link onClick={handleLogout}>
//                 Logout <FaUser size={20} />
//               </Nav.Link>
//             ) : (
//               <>
//                 <Nav.Link as={Link} to="/login" onClick={handleClose}>
//                   Login <FaUser size={20} />
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/signup" onClick={handleClose}>
//                   Signup <FaUser size={20} />
//                 </Nav.Link>
//               </>
//             )}
//             <Nav.Link href="#wishlist" onClick={handleClose}>
//               Wishlist <FaHeart size={20} />
//             </Nav.Link>
//             <Nav.Link href="#cart" onClick={handleClose}>
//               Cart <FaShoppingCart size={20} />
//             </Nav.Link>
//             <Nav.Link href="https://web.whatsapp.com/918469210000" target="_blank" rel="noopener noreferrer" onClick={handleClose} style={{ color: 'green' }}>
//               WhatsApp <FaWhatsapp size={20} />
//             </Nav.Link>
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </Navbar>
//   );
// }

// export default Header;



// import { useEffect, useState } from 'react';
// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
// import { FaBars, FaUser, FaHeart, FaShoppingCart, FaWhatsapp, FaSearch } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import { handleSuccess } from '../utils';

// function Header({ isAuthenticated, onLogout }) {
//   const [showOffcanvas, setShowOffcanvas] = useState(false);
//   const [loggedInUser, setLoggedInUser] = useState('');
//   const navigate = useNavigate();

//   const handleClose = () => setShowOffcanvas(false);
//   const handleShow = () => setShowOffcanvas(true);

//   useEffect(() => {
//     setLoggedInUser(localStorage.getItem('loggedInUser'));
//   }, []);

//   const handleLogout = (e) => {
//     e.preventDefault();
//     localStorage.removeItem('token');
//     localStorage.removeItem('loggedInUser');
//     handleSuccess('User Logged out');
//     setTimeout(() => {
//       navigate('/login');
//     }, 500);
//   };

//   return (
//     <Navbar bg="light" expand="lg" className="py-3">
//       <Container>
//         <Navbar.Brand as={Link} to="/home" style={{ fontFamily: 'Great Vibes, cursive', fontSize: '40px', color: '#c6605d' }}>
//           Bridal's Studio
//         </Navbar.Brand>

//         <div className="d-none d-lg-block mx-auto" style={{ width: '500px' }}>
//           <InputGroup>
//             <FormControl
//               placeholder="Search products..."
//               aria-label="Search products"
//             />
//             <InputGroup.Text style={{ background: 'none', border: 'none', color: 'black' }}>
//               <FaSearch size={20} style={{ cursor: 'pointer' }} />
//             </InputGroup.Text>
//           </InputGroup>
//         </div>
//         <div><h1>{loggedInUser}</h1></div>
//         <Nav className="ml-auto d-none d-lg-flex align-items-center">
//           <Dropdown>
//             <Dropdown.Toggle variant="light" id="dropdown-basic" className="p-0" style={{ border: 'none', background: 'none' }}>
//               <FaUser size={20} />
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//               {isAuthenticated ? (
//                 <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
//               ) : (
//                 <>
//                   <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
//                   <Dropdown.Item as={Link} to="/signup">Signup</Dropdown.Item>
//                 </>
//               )}
//             </Dropdown.Menu>
//           </Dropdown>

//           <Nav.Link href="#wishlist">
//             <FaHeart size={20} />
//           </Nav.Link>
//           <Nav.Link href="#cart">
//             <FaShoppingCart size={20} />
//           </Nav.Link>
//           <Nav.Link href="https://web.whatsapp.com/918469210000" target="_blank" rel="noopener noreferrer" style={{ color: 'green' }}>
//             <FaWhatsapp size={20} />
//           </Nav.Link>
//         </Nav>

//         <div className="d-lg-none ml-auto">
//           <FaBars size={25} onClick={handleShow} />
//         </div>
//       </Container>

//       <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Menu</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Nav className="flex-column">
//             {isAuthenticated ? (
//               <Nav.Link onClick={handleLogout}>
//                 Logout <FaUser size={20} />
//               </Nav.Link>
//             ) : (
//               <>
//                 <Nav.Link as={Link} to="/login" onClick={handleClose}>
//                   Login <FaUser size={20} />
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/signup" onClick={handleClose}>
//                   Signup <FaUser size={20} />
//                 </Nav.Link>
//               </>
//             )}
//             <Nav.Link href="#wishlist" onClick={handleClose}>
//               Wishlist <FaHeart size={20} />
//             </Nav.Link>
//             <Nav.Link href="#cart" onClick={handleClose}>
//               Cart <FaShoppingCart size={20} />
//             </Nav.Link>
//             <Nav.Link href="https://web.whatsapp.com/918469210000" target="_blank" rel="noopener noreferrer" onClick={handleClose} style={{ color: 'green' }}>
//               WhatsApp <FaWhatsapp size={20} />
//             </Nav.Link>
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </Navbar>
//   );
// }

// export default Header;

import { useEffect, useState } from 'react';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FaBars, FaUser, FaHeart, FaShoppingCart, FaWhatsapp, FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { handleSuccess } from '../utils';

function Header({ isAuthenticated, onLogout }) {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'));
  }, [isAuthenticated]); // Dependency array includes isAuthenticated

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Logged out');
    navigate('/login', { replace: true }); // Immediate navigation
  };

  return (
    <Navbar bg="light" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand as={Link} to="/home" style={{ fontFamily: 'Great Vibes, cursive', fontSize: '40px', color: '#c6605d' }}>
          Bridal's Studio
        </Navbar.Brand>

        <div className="d-none d-lg-block mx-auto" style={{ width: '500px' }}>
          <InputGroup>
            <FormControl
              placeholder="Search products..."
              aria-label="Search products"
            />
            <InputGroup.Text style={{ background: 'none', border: 'none', color: 'black' }}>
              <FaSearch size={20} style={{ cursor: 'pointer' }} />
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div><h1>{loggedInUser}</h1></div>
        <Nav className="ml-auto d-none d-lg-flex align-items-center">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" className="p-0" style={{ border: 'none', background: 'none' }}>
              <FaUser size={20} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {isAuthenticated ? (
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              ) : (
                <>
                  <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/signup">Signup</Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link href="#wishlist">
            <FaHeart size={20} />
          </Nav.Link>
          <Nav.Link href="#cart">
            <FaShoppingCart size={20} />
          </Nav.Link>
          <Nav.Link href="https://web.whatsapp.com/918469210000" target="_blank" rel="noopener noreferrer" style={{ color: 'green' }}>
            <FaWhatsapp size={20} />
          </Nav.Link>
        </Nav>

        <div className="d-lg-none ml-auto">
          <FaBars size={25} onClick={handleShow} />
        </div>
      </Container>

      <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {isAuthenticated ? (
              <Nav.Link onClick={handleLogout}>
                Logout <FaUser size={20} />
              </Nav.Link>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" onClick={handleClose}>
                  Login <FaUser size={20} />
                </Nav.Link>
                <Nav.Link as={Link} to="/signup" onClick={handleClose}>
                  Signup <FaUser size={20} />
                </Nav.Link>
              </>
            )}
            <Nav.Link href="#wishlist" onClick={handleClose}>
              Wishlist <FaHeart size={20} />
            </Nav.Link>
            <Nav.Link href="#cart" onClick={handleClose}>
              Cart <FaShoppingCart size={20} />
            </Nav.Link>
            <Nav.Link href="https://web.whatsapp.com/918469210000" target="_blank" rel="noopener noreferrer" onClick={handleClose} style={{ color: 'green' }}>
              WhatsApp <FaWhatsapp size={20} />
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}

export default Header;

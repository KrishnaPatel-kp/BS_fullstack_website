import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { handleError, handleSuccess } from '../utils';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo({ ...loginInfo, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('Email and password are required');
        }
        try {
            const url = `http://localhost:3500/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/home');
                }, 1000);
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
        } catch (err) {
            handleError(err);
        }
    };

    return (
        <Container style={{ color: '#000', maxWidth: '500px', marginTop: '100px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Row className="justify-content-center">
                <Col md={12}>
                    <h1 className="text-center mb-4" style={{ color: '#c6605d' }}>Login</h1>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                type="email"
                                name="email"
                                placeholder="Enter your email..."
                                value={loginInfo.email}
                                style={{ borderColor: '#c6605d', color: '#000' }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter your password..."
                                value={loginInfo.password}
                                style={{ borderColor: '#c6605d', color: '#000' }}
                            />
                            <Button
                                variant="link"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', padding: '0',marginTop: '10px', backgroundColor: 'transparent' }}
                            >
                                {showPassword ? <FaEyeSlash style={{ color: 'black', fontSize: '1.25rem' }} /> : <FaEye style={{ color: 'black', fontSize: '1.25rem' }} />}
                            </Button>
                        </Form.Group>

                        <div className="text-end mb-3">
                            <Link to="/forgot-password" style={{ color: '#c6605d' }}>Forgot Password?</Link>
                        </div>

                        <Button variant="primary" type="submit" style={{ backgroundColor: '#c6605d', borderColor: '#c6605d', width: '100%' }}>
                            Login
                        </Button>
                    </Form>

                    <div className="text-center mt-3">
                        <span>Don't have an account? <Link to="/signup" style={{ color: '#c6605d' }}>Signup</Link></span>
                    </div>

                    <div className="text-center mt-4">
                        <Button variant="outline-light" className="me-2" style={{ borderColor: '#c6605d', color: '#c6605d', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FaGoogle style={{ marginRight: '8px' }} /> Sign in with Google
                        </Button>
                    </div>

                    <ToastContainer />
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button, Form, Container, Row, Col } from 'react-bootstrap';
// import { ToastContainer, toast } from 'react-toastify';

// function Login({ setIsAuthenticated }) {
//   const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginInfo({ ...loginInfo, [name]: value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const { email, password } = loginInfo;

//     if (!email || !password) {
//       return toast.error('Email and password are required');
//     }

//     try {
//       const response = await fetch('http://localhost:3500/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });
//       const result = await response.json();

//       if (result.success) {
//         localStorage.setItem('token', result.jwtToken);
//         localStorage.setItem('loggedInUser', result.name);
//         setIsAuthenticated(true);
//         navigate('/home');
//       } else {
//         toast.error(result.message || 'Login failed');
//       }
//     } catch (err) {
//       toast.error('An error occurred');
//     }
//   };

//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <h1>Login</h1>
//           <Form onSubmit={handleLogin}>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={loginInfo.email}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Form.Group controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 value={loginInfo.password}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             <Button variant="primary" type="submit">Login</Button>
//           </Form>
//           <ToastContainer />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Login;

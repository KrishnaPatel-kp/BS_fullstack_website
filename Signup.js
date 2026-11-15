import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { handleError, handleSuccess } from '../utils';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

function Signup() {

    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo({ ...signupInfo, [name]: value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = signupInfo;
        if (!name || !email || !password) {
            return handleError('Name, email, and password are required');
        }
        if (password !== confirmPassword) {
            return handleError('Passwords do not match');
        }
        try {
            const url = `http://localhost:3500/auth/signup`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else if (error) {
                const details = error?.details[0]?.message || 'Signup failed';
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
        } catch (err) {
            handleError(err.message);
        }
    };

    return (
        <Container style={{ color: '#000', maxWidth: '500px', marginTop: '100px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Row className="justify-content-center">
                <Col md={12}>
                    <h1 className="text-center mb-4" style={{ color: '#c6605d' }}>Signup</h1>
                    <Form onSubmit={handleSignup}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                type="text"
                                name="name"
                                placeholder="Enter your name..."
                                value={signupInfo.name}
                                style={{ borderColor: '#c6605d', color: '#000' }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                type="email"
                                name="email"
                                placeholder="Enter your email..."
                                value={signupInfo.email}
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
                                value={signupInfo.password}
                                style={{ borderColor: '#c6605d', color: '#000' }}
                            />
                            <Button
                                variant="link"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', padding: '0', marginTop: '10px', backgroundColor: 'transparent' }}
                            >
                                {showPassword ? <FaEyeSlash style={{ color: 'black', fontSize: '1.25rem' }} /> : <FaEye style={{ color: 'black', fontSize: '1.25rem' }} />}
                            </Button>
                        </Form.Group>

                        <Form.Group className="mb-3 position-relative" controlId="formConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                placeholder="Confirm your password..."
                                value={signupInfo.confirmPassword}
                                style={{ borderColor: '#c6605d', color: '#000' }}
                            />
                            <Button
                                variant="link"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', padding: '0', marginTop: '10px', backgroundColor: 'transparent' }}
                            >
                                {showConfirmPassword ? <FaEyeSlash style={{ color: 'black', fontSize: '1.25rem' }} /> : <FaEye style={{ color: 'black', fontSize: '1.25rem' }} />}
                            </Button>
                        </Form.Group>

                        <Button  variant="primary" type="submit" style={{ backgroundColor: '#c6605d', borderColor: '#c6605d', width: '100%' }}>
                            Signup
                        </Button>
                    </Form>

                    <div className="text-center mt-3">
                        <span>Already have an account? <Link to="/login" style={{ color: '#c6605d' }}>Login</Link></span>
                    </div>

                    <div className="text-center mt-4">
                        <Button variant="outline-light" className="me-2" style={{ borderColor: '#c6605d', color: '#c6605d', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FaGoogle style={{ marginRight: '8px' }} /> Sign up with Google
                        </Button>
                    </div>

                    <ToastContainer />
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button, Form, Container, Row, Col } from 'react-bootstrap';
// import { ToastContainer, toast } from 'react-toastify';

// function Signup({ setIsAuthenticated }) {
//   const [signupInfo, setSignupInfo] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSignupInfo({ ...signupInfo, [name]: value });
//   };

//   const handleSignup = async (e) =>

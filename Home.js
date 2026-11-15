// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { handleError, handleSuccess } from '../utils';
// import { ToastContainer } from 'react-toastify';
// // import { Button } from 'react-bootstrap';

// function Home() {
//     const [loggedInUser, setLoggedInUser] = useState('');
   
//     const navigate = useNavigate();
//     useEffect(() => {
//         setLoggedInUser(localStorage.getItem('loggedInUser'))
//     }, [])

//     const handleLogout = (e) => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('loggedInUser');
//         handleSuccess('User Loggedout');
//         setTimeout(() => {
//             navigate('/login');
//         }, 500)
//     }

    

//     return (
    
//         <div>
//             <h1>Welcome {loggedInUser}</h1>
//             {/* <button onClick={handleLogout}>Logout</button> */}

//             <ToastContainer />
//         </div>
//     )
// }

// export default Home;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Button } from 'react-bootstrap';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('loggedInUser');
        if (user) {
            setLoggedInUser(user);
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        toast.success('User logged out successfully');
        setTimeout(() => {
            navigate('/home');
        }, 500);
    };

    return (
        <div>
            <h1>Welcome{loggedInUser ? `, ${loggedInUser}` : ''}</h1>
            {loggedInUser ? (
                <Button onClick={handleLogout}>Logout</Button>
            ) : (
                <div>
                    <Button onClick={() => navigate('/login')}>Login</Button>
                    <Button onClick={() => navigate('/signup')}>Signup</Button>
                </div>
            )}
            <ToastContainer />
        </div>
    );
}

export default Home;

// import React from 'react';
// import { Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// function Home({ isAuthenticated }) {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Welcome{isAuthenticated ? '' : ', please log in'}</h1>
//       {isAuthenticated ? (
//         <Button onClick={() => navigate('/home')}>Go to Home</Button>
//       ) : (
//         <div>
//           <Button onClick={() => navigate('/login')}>Login</Button>
//           <Button onClick={() => navigate('/signup')}>Signup</Button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;


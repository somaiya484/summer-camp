import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../authProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleSignIn = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }

                fetch(' https://summer-camp-server-somaiyai342-gmailcom.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)

                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div>
            <div className='w-full text-center pt-7'>
                <button onClick={handleGoogleSignIn} className="btn btn-circle bg-transparent  border-yellow-500 border-2 text-yellow-700 hover:text-black">
                    <FaGoogle className='text-lg'></FaGoogle>
                </button>
            </div>
            <div className="divider"></div>
        </div >
    );
};

export default GoogleSignIn;
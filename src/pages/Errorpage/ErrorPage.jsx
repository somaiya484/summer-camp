import { Link, useRouteError } from 'react-router-dom';
import errorPageImage from "../../assets/404-error-page-not-found-vinyl-music-broken-vector-26853732.jpg"

const ErrorPage = () => {
    const { error, errorStatus: errorMessage }  = useRouteError();
    return (
            <div className='flex  flex-col md:flex-row  align-middle justify-center p-7 text-red-700 bg-white'>
                <div>
                    <img src={errorPageImage} className='w-2/4 mx-auto'/>
                </div>
                <div className='px-5 mt-16 flex  items-center justify-center '>
                    <div className=' text-center'>
                        <p className=' text-xl font-bold  mb-3'>
                            {error?.message}
                        </p>
                        <Link
                            to='/'
                            className='p-8 py-4 font-bold text-yellow-700 text-base'
                        >
                            Back To The Home page
                        </Link>
                    </div>
                </div>
            </div>
    );
};



export default ErrorPage;
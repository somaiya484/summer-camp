import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useClasses from "../../../hook/useClasses";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [clas] = useClasses();
    const total = clas.reduce((sum, cless) => sum + cless.price, 0);
    const price = parseFloat(total.toFixed(2))

    return (
        <div>

            <h2 className="italic capitalize text-yellow-800 font-semibold h-[60px] flex justify-evenly items-center py-10 text-2xl"> Pay Here For enrolled in your selected Class</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm clas={clas} price={price} 
                ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;







// import { loadStripe } from '@stripe/stripe-js';
// import CheckOut from './checkOut';
// import { Elements } from '@stripe/react-stripe-js';


// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

// const Payment = () => {
//     return (
//         <div>
//             <h3 className="italic capitalize text-yellow-800 font-semibold h-[60px] flex justify-evenly items-center py-10 text-3xl">
//                 Payment
//             </h3>
//             <Elements stripe={stripePromise}>
//                 <CheckOut></CheckOut>
//             </Elements>
//         </div>
//     );
// };

// export default Payment;
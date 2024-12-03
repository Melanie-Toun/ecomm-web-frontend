
import React, { useContext, useEffect } from 'react';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
import EcomContext from '../../context/EcomContext';

const ThankYou = () => {
  // const { createOrder, isAuthenticated, order } = useContext(EcomContext);
  // const [searchparams] = useSearchParams();
  // const tx_ref = searchparams.get("tx_ref");
  // const transaction_id = searchparams.get("transaction_id");

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" />;
  // }

  // useEffect(() => {
  //   if (transaction_id && tx_ref) {
  //     console.log(transaction_id, tx_ref)
  //     createOrder(transaction_id && tx_ref);
  //   }
  // }, [createOrder, transaction_id, tx_ref]);

  // // console.log(createOrder)
  // console.log(order);
  const { createOrder, order, isAuthenticated } = useContext(EcomContext);
  const [searchParams] = useSearchParams();
  const tx_ref = searchParams.get("tx_ref");
  const transaction_id = searchParams.get("transaction_id");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  useEffect(() => {
    if (transaction_id && tx_ref) {
      createOrder(transaction_id, tx_ref);
    }
  }, []);
  

  return (

    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('../../img/tree.jpg')" }}
    >
      
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative bg-white bg-opacity-10 p-8 rounded-lg shadow-lg max-w-lg text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Thank You!</h1>
        <p className="text-white mb-6">
          Thank you for your purchase! Below is a summary of your order.
        </p>
        
        {/* Receipt Section */}
        {/* <div className=" bg-opacity-90 rounded-lg p-4 shadow-md text-left text-white">
          <h2 className="text-xl font-bold mb-4 text-center">Receipt</h2>

          <p className='text-lg'>Order Id: 106d2b56-ff07-48b7-a8fe-81cbc1e7ec16</p>
          <p className='text-lg'>Transaction Id: 8226788</p>

          <p className='text-lg'>FirstName: {order.firstName}</p>
          <p className='text-lg'>LastName: {order.lastName}</p>
          <p className='text-lg'>Email: {order.email}</p>
          <hr className="my-4" />
          <div className="pl-5">
            <p>Items Purchased:</p>
            <ul className="text-right">
              <li>{`${order.orderItems}`}</li>
              
            </ul>
          </div>
          <hr className="my-4" />
          <p className="font-semibold ">
            Total:  {`${order.amount}`}
          </p>
        </div> */}

        <Link
          to="/"
          className="inline-block bg-teal-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-teal-600 transition mt-6"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
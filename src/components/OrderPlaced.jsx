import React from 'react';

function OrderPlaced() {
    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <img className='w-72 items-center h-64' src="./src/assets/orderplaced.png" alt=""/>
            <div className='w-full text-lg font-medium text-center'>Order Placed Successfully, Wait for Delivery</div>
        </div>
    );
}

export default OrderPlaced;
import React from "react";
import { useSelector } from "react-redux";
import { CardImgUrl } from "../utils/Urls";
import { Link } from "react-router-dom";
function OrderDetails(params) {
  const item = useSelector((appStore) => appStore.cart.items);

  const onclick =(e)=>{
      e.preventDefault();
  }
  return (
    <div className="mt-20 w-screen w-screen h-full">
      <div className="w-[70%] mx-auto">
        <h3>Order Details</h3>
        {item.map((ele) => (
          <div className="inline-block mr-2 shadow-xl" key={ele.id}>
            <img
              className="h-24 w-24 object-cover rounded-lg"
              src={CardImgUrl + ele.imageId}
              alt="items"
            />
          </div>
        ))}
      </div>
      <form className="w-[70%] mx-auto mt-6">
        <div className="mt-8">Name</div>
        <input className=" pl-3 h-10 mb-2 rounded-xl" type="text" placeholder="Enter your name" />
        <br />
        <div className="mt-2">Contact</div>
        <input className="mb-2 pl-3 h-10 rounded-lg" type="text" placeholder="to delivery number" />
        <br />
        <div className="mt-2">Address</div>
        <input className="mb-2 pl-3 h-10 rounded-lg" type="text" placeholder="Delivery address" />
        <br />
        <div className="mt-6 font-medium">Delivery Options</div>
        <input className="my-2" type="radio" value="" name="delivery" />
        Cash On Delivery 
        <div className="mb-6 opacity-45">Other Payment Options coming soon.</div>
        {item.length == 0 ? <button onClick={(e)=>onclick(e)} className="px-24 py-3 bg-violet-400 rounded-lg">Add items to Cart</button>:<Link to={"/orderplaced"} className="px-24 py-3 bg-violet-400 rounded-lg">Place Order</Link>}
      </form>
    </div>
  );
}

export default OrderDetails;

import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";


const Cart = () => {
    const {cart}=useSelector((state)=>state);
    const [totalAmount,setTotalAmount]=useState(0);
    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
    },[cart])
  return (
    <div className="">
        {
            cart.length>0?
            ( <div className="flex max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] ">
                 <div className="">
                    {
                        cart.map((item,index)=>{
                            return <CartItem key={item.id} item={item} itemIndex={index}/>
                        })
                    }
                 </div>
                 <div className="flex flex-col justify-between h-[500px]">
                    <div className="flex flex-col">
                        <div className="text-sm font-semibold uppercase mt-2">Your Cart</div>
                        <div className="text-4xl font-bold uppercase text-green-700 mt-2">SUmmary</div>
                        <p className="mt-2">
                            <span>Total Items: {cart.length}</span>
                        </p>
                    </div>
                    <div>
                        <p className="text-sm ">Total Amount: <span className="font-bold mt-2">${totalAmount}</span></p>
                        <button className="bg-green-700 w-full p-2 rounded text-white text-lg mt-2">
                            Check Out
                        </button>
                    </div>
                 </div>
              </div>
             ):
            (
              <div className="flex flex-col h-screen items-center justify-center">
              <h1 className="">Cart is Empty</h1>
              <NavLink to={"/"}>
                 <button className="bg-green-700 w-[150px] p-2 rounded text-white text-lg mt-2">
                   Shop Now
                 </button>
              </NavLink>
              </div>
            )
        }
    </div>
  )
}

export default Cart
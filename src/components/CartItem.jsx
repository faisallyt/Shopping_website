import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux"
import { remove } from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast"

const CartItem = ({item,itemIndex}) => {
    const dispatch=useDispatch();
    const removeFromCart=()=>{
        dispatch(remove(item.id));
        toast.error("Item Removed");
    }
  return (
    <div className="flex border-b-4 gap-x-10 p-8">
        <div className="flex min-h-[180px] max-w-[180px] items-center ">
            <img src={item.image} alt="" className="w-full h-[180xpx]" />
        </div>
        <div className=" flex flex-col gap-y-5">
            <h1 className="text-gray-700 font-semibold text-lg text-left w-[350px]  mt-1 ">{item.title}</h1>
            <h1 className="text-gray-700  text-md text-left w-[500px]  mt-1 ">{item.description.split(' ').slice(0,25).join(" ")+"..."}</h1>
            <div className="flex justify-between items-center">
                <p className="text-green-600 font-semibold item-center w-full mt-5">${item.price}</p>
                <div className=" flex gap-x-1 text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
                        hover:bg-gray-700 hover:text-white transition duration-300 ease-in mt-5 items-center" onClick={removeFromCart}>
                        
                        <FcDeleteDatabase className="text-2xl"></FcDeleteDatabase>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default CartItem
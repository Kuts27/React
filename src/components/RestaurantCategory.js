
import { CDN_URL } from "../utils/constants"
import React from "react"
import { useState } from "react"
import ItemList from "./ItemList"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"

const RestaurantCategory =(data) =>{

    //const {items} = data?.data?.itemCards[0]
    const [showItems, setShowItems] = useState(false)

    const handleClick =() =>{
        console.log("clicked")
        setShowItems(!showItems)
    }

    const dispatch = useDispatch()
    const handleAddItem = (item) =>{
        //dispatch an action
        dispatch(addItem(item))
    }    
    //console.log(data)
    //console.log(items)
    return (
        <div>
            <div className=" w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                       {/* header */}
                <span className="font-bold text-lg">{data?.data?.title} </span>
                <span>↓</span>
                </div>     
                   {/* Accordian body */}  
                  
                  { showItems &&
                   <div className="">
                    <ul className="text-left ">
                   <li className="flex justify-between my-3">{data?.data?.itemCards[0]?.card?.info?.name} -Rs.{data?.data?.itemCards[0]?.card?.info?.price/100} 
                        <div><div className="absolute"><button onClick={() => handleAddItem(data?.data?.itemCards[0])} className=" bg-black text-white shadow-lg cursor-pointer">Add +</button> </div><img src={CDN_URL+ data?.data?.itemCards[0]?.card?.info?.imageId} className="w-20"/></div></li> 
                   <li className="flex justify-between my-3">{data?.data?.itemCards[1]?.card?.info?.name} -Rs.{data?.data?.itemCards[1]?.card?.info?.price/100} 
                        <div><div className="absolute"><button onClick={() => handleAddItem(data?.data?.itemCards[1])} className=" bg-black text-white shadow-lg cursor-pointer">Add +</button> </div><img src={CDN_URL+ data?.data?.itemCards[1]?.card?.info?.imageId} className="w-20"/></div></li> 
                   <li className="flex justify-between my-3">{data?.data?.itemCards[2]?.card?.info?.name} -Rs.{data?.data?.itemCards[2]?.card?.info?.price/100} 
                        <div><div className="absolute"><button onClick={() => handleAddItem(data?.data?.itemCards[2])} className=" bg-black text-white shadow-lg cursor-pointer">Add +</button> </div><img src={CDN_URL+ data?.data?.itemCards[2]?.card?.info?.imageId} className="w-20"/></div></li> 
                   <li className="flex justify-between my-3">{data?.data?.itemCards[3]?.card?.info?.name} -Rs.{data?.data?.itemCards[3]?.card?.info?.price/100} 
                        <div><div className="absolute"><button onClick={() => handleAddItem(data?.data?.itemCards[3])} className=" bg-black text-white shadow-lg cursor-pointer">Add +</button> </div><img src={CDN_URL+ data?.data?.itemCards[3]?.card?.info?.imageId} className="w-20"/></div></li> 
                   </ul>
                </div>
                }
                

                {/* <ItemList items = {data?.data?.itemCards}/> */}
            </div>       
         
        </div>
    )
}

export default RestaurantCategory
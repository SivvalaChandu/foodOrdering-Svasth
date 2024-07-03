import { useEffect } from "react";
import { ApiUrl } from "./Urls";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurants } from "./store/restaurantSlice";

function useRestaurantsList() {
    const dispatch = useDispatch();
    const list = useSelector(store=>store.restaurants.list[0]);
    useEffect(() => {
            if(!list) {
                 fetchData();
            }
    },[]);

    const fetchData = async () => {
        const data = await fetch(ApiUrl);
        const json = await data.json();
        dispatch(addRestaurants(
            json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )) 
        console.log(list);
    }
}

export default useRestaurantsList;
import { useEffect } from "react";
import { resMenu } from "./Urls";
import { useDispatch, useSelector } from "react-redux";
import { addmenu } from "./store/MenuSlice";

function useRestaurantMenu(id) {
  const dispatch = useDispatch();
  const menu = useSelector((store) => store.menu.menuItems);
  
  useEffect(() => {
    if (!menu[id]) {
      fetchMenu();
    }
  }, []);

  const fetchMenu = async () => {
    const resmenu = await fetch(resMenu + id);
    const json = await resmenu.json();

    const path = json.data?.cards[2]?.card?.card?.info;
    const menuCard = json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    const menuData = {
      id: path.id,
      name: path.name,
      cuisines: path.cuisines,
      avgRating: path.avgRating,
      costForTwoMessage: path.costForTwoMessage,
      totalRatingsString: path.totalRatingsString,
      cloudinaryImageId: path.cloudinaryImageId,
      cards: menuCard.cards,
    };
    dispatch(addmenu(menuData));
  };
}

export default useRestaurantMenu;

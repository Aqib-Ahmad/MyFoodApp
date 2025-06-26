import { useEffect, useState } from "react";
import { MENU_API } from "./common";

const useRestraurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  // fetch data
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return resInfo;
};

export default useRestraurantMenu;

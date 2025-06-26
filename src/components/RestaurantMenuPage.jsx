import ShimerUi from "./ShimerUi";
import { useParams } from "react-router-dom";
import useRestraurantMenu from "../components/utils/useRestraurantMenu";
import RestaurentCategoryAcc from "./RestaurentCategoryAcc";
import { useState } from "react";
const RestaurantMenuPage = () => {
  const { resId } = useParams();
  const resInfo = useRestraurantMenu(resId);
  // lifting state up
  const [showHideIndex, setShowHideIndex] = useState();

  if (resInfo === null) {
    return <ShimerUi />;
  }

  const itemCards =
    // resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[8].card.card;
    resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (e) =>
        e.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const { name, city, costForTwoMessage } =
    resInfo.data.cards[2].card.card.info;

  return (
    <>
      <div className=" ">
        <h1 className="font-bold text-2xl py-2 text-center">{name}</h1>
        <p className="text-lg py-2 text-center">{city}</p>
        <h5 className="text-lg py-2 text-center">{costForTwoMessage}</h5>

        {itemCards.map((data, index) => (
          <RestaurentCategoryAcc
            key={data.card.card.categoryId}
            data={data.card.card}
            showHide={index == showHideIndex ? true : false}
            setShowHideIndex={() => setShowHideIndex(index)} // lifting state up
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenuPage;

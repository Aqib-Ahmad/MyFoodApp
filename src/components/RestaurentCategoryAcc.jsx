import { useState } from "react";
import RestCatList from "./RestCatList";

const RestaurentCategoryAcc = ({ data, setShowHideIndex, showHide }) => {
  const [additional, setAdditional] = useState(false);
  // lifting state up
  const handleClick = () => {
    setShowHideIndex();
    setAdditional(!additional);
  };
  return (
    <>
      <div className="bg-gray-200 w-6/12 m-auto p-2 my-3">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <p>
            {data.title}
            <strong>-({data.itemCards.length})</strong>
          </p>
          <span>⬆️</span>
        </div>
        {showHide && additional && <RestCatList data={data.itemCards} />}
      </div>
    </>
  );
};

export default RestaurentCategoryAcc;

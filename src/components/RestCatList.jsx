import { useDispatch } from "react-redux";
import { IMG_URL } from "./utils/common";
import { addItem } from "./utils/cardSlice";

const RestCatList = (item) => {
  const dispatch = useDispatch();
  const handleItemCart = (e) => {
    dispatch(addItem(e));
  };
  return (
    <>
      <div>
        {item.data.map((e) => (
          <div
            key={e.card.info.id}
            className="border-b-2 mx-0 my-4 bg-amber-300 p-2 flex gap-10 "
          >
            <div className="w-8/12">
              <div className="flex p-2 gap-5">
                <span className="text-2xl">{e.card.info.name}</span>
                <span className="text-2xl font-bold">
                  ₹
                  {e.card.info.price
                    ? e.card.info.price / 100
                    : e.card.info.defaultPrice / 100}
                </span>
              </div>
              <div>{e.card.info.description}</div>
            </div>
            <div className="w-3/12">
              <img
                className="w-full"
                src={IMG_URL + e.card.info.imageId}
                alt=""
              />
              <button
                onClick={() => handleItemCart(e)}
                className="text-center p-2 mt-3 cursor-pointer  text-white bg-black rounded"
              >
                Add+
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestCatList;

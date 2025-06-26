import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "./utils/common";
import RestCatList from "./RestCatList";
import { clearItem } from "./utils/cardSlice";
// item.data.itemCards.map
const CartHeader = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const HandleClear = () => {
    dispatch(clearItem());
  };

  return (
    <>
      <div className="w-9/12 m-auto bg-blue-400 p-5">
        <button
          onClick={HandleClear}
          className="bg-amber-900 text-white px-3 py-2 rounded-2xl cursor-pointer"
        >
          Clear button
        </button>
        {cartItems.length === 0 ? (
          <p className="text-center text-red-600 text-2xl">
            Your cart is empty.
          </p>
        ) : (
          <>
            <RestCatList data={cartItems} />
          </>
        )}
      </div>
    </>
  );
};

export default CartHeader;

import { IMG_URL } from "./utils/common";

const Cart = ({ data }) => {
  const { avgRating, costForTwo, locality, name, cuisines, cloudinaryImageId } =
    data.info;

  return (
    <>
      <div className="w-72 h-[600px] mt-10 border p-3 overscroll-auto flex flex-col gap-3 flex-wrap bg-gray-100 rounded">
        <img className="rounded-2xl" src={IMG_URL + cloudinaryImageId} alt="" />
        <h3 className="text-lg">{name}</h3>
        <h5 className="text-sm">{cuisines}</h5>
        <p className="text-sm">Rating is : {avgRating}</p>
        <p className="text-sm"> Location :{locality}</p>
        <p className="text-sm"> costForTwo :{costForTwo}</p>
      </div>
    </>
  );
};

// higher order component: one component taking parameter another component.
export const withPromotedLabel = (Cart) => {
  return (props) => {
    return (
      <>
        <div className="relative">
          <label className=" absolute -left-4  bg-black  p-1 rounded text-white">
            Promoted restaurent
          </label>
          <Cart {...props} />
        </div>
      </>
    );
  };
};

export default Cart;

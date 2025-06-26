// import React, { useEffect, useState } from "react";
// import Cart from "./Cart";
// import ShimerUi from "./ShimerUi";

// const Body = () => {
//   const [myData, setMyData] = useState([]);
//   const [filteredRest, setfilteredRest] = useState([]);
//   console.log(myData);
//   const [searchText, setSearchText] = useState("");

//   const fetchingData = async () => {
//     let res = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const FetchJsonData = await res.json();
//     const filteredData =
//       FetchJsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
//         .restaurants;
//     setMyData(filteredData);
//     setfilteredRest(filteredData);
//   };
//   useEffect(() => {
//     fetchingData();
//   }, []);
//   const handleFilteredData = () => {
//     // console.log(myData, "myData");
//     const filteredData2 = myData.filter(
//       (data) => data.info.areaName == "Chhindwara City"
//     );
//     setMyData(filteredData2);
//     // console.log(myData.filter((d) => d.info.areaName == "Chhindwara City"));
//   };

//   // if (myData.length === 0) {
//   //   return (
//   //     <>
//   //       <ShimerUi />
//   //     </>
//   //   );
//   // }

//   return myData.length === 0 ? (
//     <ShimerUi />
//   ) : (
//     <div>
//       <div className="filtered-wrapper">
//         <div className="search-button">
//           <input
//             type="text"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             placeholder="Search....."
//           />
//           <button
//             onClick={() => {
//               // console.log(searchText);

//               const filteredRes = myData.filter((res) =>
//                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
//               );
//               // console.log(filteredRes, "searchText");
//               setfilteredRest(filteredRes);
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <div className="filtereddata">
//           <button onClick={() => handleFilteredData()}>Filtered area </button>
//         </div>
//       </div>
//       <div className="appContainer">
//         {filteredRest.map((dataSwiggyprops, id) => (
//           <Cart key={id} data={dataSwiggyprops} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;

import { useContext, useEffect, useState } from "react";
import Cart, { withPromotedLabel } from "./Cart";
import ShimerUi from "./ShimerUi";
import { API_URL } from "./utils/common";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
const Body = () => {
  const [fetchData, setFetchData] = useState([]);
  const [fetchDataCopy, setFetchDataCopy] = useState([]);
  const [searchData, setSearchData] = useState();
  const WithPromoted = withPromotedLabel(Cart);
  // console.log(fetchData, "fetchData");

  const gettingApiData = async () => {
    const res = await fetch(API_URL);
    const myJsonData = await res.json();
    const myFettingData =
      myJsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setFetchData(myFettingData);
    setFetchDataCopy(myFettingData);
  };
  useEffect(() => {
    gettingApiData();
  }, []);

  const handleFilteredData = () => {
    const fillData = fetchData.filter((data) => data.info.avgRating > 4.2);
    setFetchDataCopy(fillData);
  };
  const { loginUser, setUserNameApp } = useContext(UserContext);

  const OnelineStatus = useOnlineStatus();
  if (OnelineStatus === false) {
    return <h1>You are offline</h1>;
  }

  return fetchData.length == 0 ? (
    <ShimerUi />
  ) : (
    <>
      <div className="flex justify-around mt-5">
        <div className="flex gap-5">
          <input
            className="outline-gray-400 px-2 py-1"
            type="text"
            placeholder="Search....."
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
          <button
            className="bg-blue-500 py-1 px-2 rounded text-white cursor-pointer"
            onClick={() => {
              const SearchDataInner = fetchData.filter((res) =>
                res.info.name.toLowerCase().includes(searchData.toLowerCase())
              );
              setFetchDataCopy(SearchDataInner);
            }}
          >
            Search
          </button>
          <button
            className="bg-blue-500 py-1 px-2 rounded text-white cursor-pointer"
            onClick={() => {
              setSearchData("");
              setFetchData(fetchDataCopy);
              console.log(fetchDataCopy);
            }}
          >
            Clear
          </button>

          <input
            className="outline-2"
            type="text"
            value={loginUser}
            onChange={(e) => setUserNameApp(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 py-1 px-2 rounded text-white cursor-pointer"
          onClick={() => handleFilteredData()}
        >
          Filter Data
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {fetchDataCopy.map((myDataProps) => (
          <Link
            key={myDataProps.info.id}
            to={"/restaurent/" + myDataProps.info.id}
          >
            {/* if restaurant is promoted thenuse this / advertise logo {instead of myDataProps.info.avgRating use myDataProps.info.promoted}*/}
            {myDataProps.info.avgRating > 4.3 ? (
              <WithPromoted data={myDataProps} />
            ) : (
              <Cart data={myDataProps} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;

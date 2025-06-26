import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import UserContext from "./components/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";
function App() {
  const [userNameApp, setUserNameApp] = useState();

  useEffect(() => {
    const data = {
      name: "khan aqib",
    };
    setUserNameApp(data.name);
  }, []);
  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider
          value={{ loginUser: userNameApp, setUserNameApp }}
        >
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </>
  );
}

export default App;

// const [userNameApp, setUserNameApp] = useState();
// const [userNameApp2, setUserNameApp2] = useState();
// useEffect(() => {
//   const data = {
//     name: "khan aqib",
//   };
//   setUserNameApp(data.name);
//   const data2 = {
//     name: "khan aqib",
//   };
//   setUserNameApp(data2.name);
// }, []);

//   here it will be default: aqib
// <UserContext.Provider value={{ loginUser: userNameApp }}>
//   <UserContext.Provider value={{ loginUser: userNameApp2 }}>
//     here it will be default : Imran khan
//     <Header />
//   </UserContext.Provider>
//  <Header />
//   <Outlet />
// </UserContext.Provider>

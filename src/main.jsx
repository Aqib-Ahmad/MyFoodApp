import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Body from "./components/Body.jsx";
import RestaurantMenuPage from "./components/RestaurantMenuPage.jsx";
import { lazy, Suspense } from "react";
import CartHeader from "./components/CartHeader.jsx";
// import Grocery from "./components/Grocery.jsx";

// chunking/dynamic bunlding/code splitting /lazy loading/on demand loading
const Grocery = lazy(() => import("./components/Grocery.jsx"));

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cartheader", element: <CartHeader /> },
      { path: "/restaurent/:resId", element: <RestaurantMenuPage /> },
      // ----------lazy loading-----------
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={
              <>
                <h1>Hiiding .....</h1>
              </>
            }
          >
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRoute} />
);

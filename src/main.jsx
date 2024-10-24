import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Cart from "./components/Cart.jsx";
import Body from "./components/Body.jsx";
import Help from "./components/Help.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import OrderDetails from "./components/OrderDetails.jsx";
import OrderPlaced from "./components/OrderPlaced.jsx";
import Errorpage from "./components/Errorpage.jsx";

const render = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/cart/order",
        element: <OrderDetails />,
      },
      {
        path: "/restaurant/:name/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart/orderplaced",
        element: <OrderPlaced />,
      },
    ],
  },
  {
    path: "*",
    element: <Errorpage />,
    error: true,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={render} />
    </Provider>
  </React.StrictMode>
);

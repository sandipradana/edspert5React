import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import CheckoutPage from "./pages/checkout";
import DetailPage from "./pages/detail";
import ProductPage from "./pages/product";
import {Provider} from 'react-redux';

import store from './store'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductPage />,
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
    ],
  },
]);

const MateriRouterResfull = () => {
  return <Provider store={store} >
    <RouterProvider router={router} />
  </Provider> ;
};

export default MateriRouterResfull;

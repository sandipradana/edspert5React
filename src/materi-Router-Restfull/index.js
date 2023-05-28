import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import CheckoutPage from "./pages/checkout";
import DetailPage from "./pages/detail";
import ProductPage from "./pages/product";

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
  return <RouterProvider router={router} />;
};

export default MateriRouterResfull;

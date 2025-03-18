import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import Home from "./views/Home";
import ForwardPage from "./views/ForwardPage";

const router = createBrowserRouter([
  {
    path: "/isItADog/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "zero",
        element: <ForwardPage />
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

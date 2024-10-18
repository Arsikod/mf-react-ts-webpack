import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Album } from "./marketing-components/components/Landing";
import { Pricing } from "./marketing-components/components/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Album />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
]);

export default () => <RouterProvider router={router} />;

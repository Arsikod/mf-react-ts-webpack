import { RouterProvider, createMemoryRouter } from "react-router-dom";

import { Album } from "./marketing-components/components/Landing";
import { Pricing } from "./marketing-components/components/Pricing";

const router = createMemoryRouter([
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

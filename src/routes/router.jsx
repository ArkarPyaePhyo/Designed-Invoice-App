import { createBrowserRouter } from "react-router-dom"
import PublicLayout from "../features/public/components/PublicLayout"
import PublicRoute from "./PublicRoute"
import AuthRoute from "./AuthRoute"
import NotFound from "../components/NotFound"
import DashboardRoute from "./DashboardRoute"


const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        errorElement: <NotFound />,
        children: [...PublicRoute
        ],
        
    },
    ...AuthRoute,
    ...DashboardRoute,
], {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true
    }
  })

export default router
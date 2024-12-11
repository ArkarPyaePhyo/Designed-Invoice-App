import { lazy } from "react";

const ContactUsPage = lazy(() => import("../features/public/pages/ContactUsPage"));
const HomePage = lazy(() => import("../features/public/pages/HomePage"));
const AboutUsPage = lazy(() => import("../features/public/pages/AboutUsPage"));


const PublicRoute = [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "contact-us",
                element: <ContactUsPage />,
            },
            {
                path: "about-us",
                element: <AboutUsPage />,
            }
            
        ]

export default PublicRoute
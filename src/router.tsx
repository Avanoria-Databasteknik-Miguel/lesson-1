import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import HomePage from "./components/pages/HomePage";
import NotFound from "./components/pages/NotFound";
import CenterLayout from "./components/layouts/CenterLayout";
// import AuthLayout from "./layouts/AuthLayout";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [ //Vilka delar som ska kunna använda AppLayout
            { path: "/", handle: { title: "Home" }, element: <HomePage /> }
        ] 
    },
    {
        element: <CenterLayout />,
        children: [
            { path: "*", handle: { title: "Not found" }, element: <NotFound /> }
        ]
    }
    //     {
    //     element: <AuthLayout />,
    //     children: [ //Vilka delar som ska kunna använda AuthLayout
    //         {
    //             path: "/login", element: <LoginPage />
    //         }
    //     ] 
    // }
])
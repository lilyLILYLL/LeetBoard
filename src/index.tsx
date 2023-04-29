import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProgressPage } from "./pages/ProgressPage";
import { CommonQuestionsPage } from "./pages/CommonQuestionsPage";
import { AccountSettingPage } from "./pages/AccountSettingPage";
import { BigSpinner } from "./pages/BigSpinner";
import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
    createHashRouter,
    RouteObject,
} from "react-router-dom";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<RouterProvider router={router} />);

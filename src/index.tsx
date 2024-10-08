import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {Root} from "./root/Root";
import {LoginRoutes} from "./login";
import {MainRoutes} from "./main";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root/>,
    },
    ...LoginRoutes,
    ...MainRoutes,
  ]
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Suspense/>}/>
  </React.StrictMode>
);


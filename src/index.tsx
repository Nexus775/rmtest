import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {Root} from "./root/Root";
import {LoginRoutes} from "./login";
import {MainRoutes} from "./main";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

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

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} fallbackElement={<Suspense/>}/>
    </QueryClientProvider>
  </React.StrictMode>
);


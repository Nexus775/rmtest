import {RouteObject} from "react-router-dom";

export const LoginRoutes: readonly RouteObject[] = [
  {
    path: "login",
    lazy: async () => {
      const {LoginBase} = await import("./LoginBase");
      return {Component: LoginBase};
    },
    children: [
      {
        path: "",
        lazy: async () => {
          const {Login} = await import("./pages/Login");
          return {Component: Login};
        },
      },
      {
        path: "new",
        lazy: async () => {
          const {Signup} = await import("./pages/Signup");
          return {Component: Signup};
        },
      },
      {
        path: "logout",
        lazy: async () => {
          const {Logout} = await import("./pages/Logout");
          return {Component: Logout};
        },
      },
    ]
  },
];
import {RouteObject} from "react-router-dom";

export const MainRoutes: readonly RouteObject[] = [
  {
    path: "main",
    lazy: async () => {
      const {MainBase} = await import("./MainBase");
      return {Component: MainBase};
    },
    children: [{
      path: "characters",
      lazy: async () => {
        const {Characters} = await import("./Characters");
        return {Component: Characters};
      },
    }]
  }
];
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
        const {Characters} = await import("./pages/Characters");
        return {Component: Characters};
      },
    }, {
      path: "characters/:id",
      lazy: async () => {
        const {SingleCharacter} = await import("./pages/SingleCharacter");
        return {Component: SingleCharacter};
      },
    }, {
      path: "location/:id",
      lazy: async () => {
        const {Location} = await import("./pages/Location");
        return {Component: Location};
      }
    }, {
      path: "episode/:id",
      lazy: async () => {
        const {Episode} = await import("./pages/Episode");
        return {Component: Episode};
      }
    }]
  }
];
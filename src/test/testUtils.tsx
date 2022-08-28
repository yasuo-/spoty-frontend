import React, { FunctionComponent } from "react";

import { render, queries, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as customQueries from "./customQueries";

import { AppProvider } from "@/providers/AppProvider";

/**
 * AllTheMockProviders
 * @param children
 * @constructor
 */
export const AllTheMockProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AppProvider>{children}</AppProvider>
);

/**
 * customRender
 * utility function that allows you to render a component
 * @param ui
 * @param route
 * @param user
 * @param renderOptions
 */
const customRender = async (ui: any, { route = "/", user, ...renderOptions }: Record<string, any> = {}) => {
  window.history.pushState({}, "", route);

  return {
    ...render(ui, {
      wrapper: AllTheMockProviders as FunctionComponent<unknown>,
      queries: { ...queries, ...customQueries },
      ...renderOptions
    }),
    user
  };
};

export * from "@testing-library/react";
export { userEvent, customRender as render };

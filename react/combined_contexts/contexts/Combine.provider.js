import { AppProvider } from "./App.context";
import { PrimeReactProvider } from "primereact/api";
import { HomeProvider } from "./Home.context";
import { ShoppingCartProvider } from "./ShoppingCart.context";

import { combineContexts } from "../utils/combineContexts";

const providers = [
  AppProvider,
  PrimeReactProvider,
  HomeProvider,
  ShoppingCartProvider
];

export const CombinedProvider = combineContexts(...providers);

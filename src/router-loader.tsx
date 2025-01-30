import { useFetchers, useNavigation } from "react-router";
import Loader from "./loader";
import * as React from "react";
export const RouterTopLoader = () => {
  return <Loader useFetchers={useFetchers} useNavigation={useNavigation} />;
};

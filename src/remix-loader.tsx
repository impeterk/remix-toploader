import { useFetchers, useNavigation } from "@remix-run/react";
import Loader from "./loader";
import * as React from "react";
export const RemixTopLoader = () => {
  return <Loader useFetchers={useFetchers} useNavigation={useNavigation} />;
};

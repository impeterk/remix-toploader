import { useFetchers, useNavigation } from "react-router";
import Loader from "./loader";

export const RouterTopLoader = Loader({ useFetchers, useNavigation });

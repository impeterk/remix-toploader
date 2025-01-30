import { useFetchers, useNavigation } from "@remix-run/react";
import Loader from "./loader";

export const RemixTopLoader = Loader({ useFetchers, useNavigation });

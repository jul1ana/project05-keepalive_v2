import React from "react";
import { useContext } from "react";

export type FirstNameType = {
  firstName: string
  setFirstName: (c: string) => void
}

export const FirstNameContext = React.createContext<FirstNameType>({
  firstName: "",
  setFirstName: () => {}
});

export const useFirstNameContext = () => useContext(FirstNameContext);
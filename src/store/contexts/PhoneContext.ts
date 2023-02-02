import { createContext } from "react";

interface PhoneContextStructure {
  phoneNumber: string;
  addNumber: (value: string) => void;
}

const PhoneContext = createContext({} as PhoneContextStructure);

export default PhoneContext;

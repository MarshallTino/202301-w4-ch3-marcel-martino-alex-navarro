import { createContext } from "react";

interface PhoneContextStructure {
  phoneNumber: string;
  addNumber: (value: string) => void;
  deleteNumber: () => void;
}

const PhoneContext = createContext({} as PhoneContextStructure);

export default PhoneContext;

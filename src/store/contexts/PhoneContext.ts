import { createContext } from "react";

interface PhoneContextStructure {
  phoneNumber: number | string;
}

const PhoneContext = createContext({} as PhoneContextStructure);

export default PhoneContext;

import { useState } from "react";
import PhoneContext from "./PhoneContext";

interface PhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneContextProvider = ({
  children,
}: PhoneContextProviderProps): JSX.Element => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const addNumber = (number: string): void => {
    if (phoneNumber.length >= 9) {
      return;
    }
    setPhoneNumber(phoneNumber + number);
  };

  return (
    <PhoneContext.Provider value={{ addNumber, phoneNumber }}>
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;

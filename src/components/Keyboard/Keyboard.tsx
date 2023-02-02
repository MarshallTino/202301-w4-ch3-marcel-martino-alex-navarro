import { useContext } from "react";
import PhoneContext from "../../store/contexts/PhoneContext";
import Key from "../Key/Key";

const Keyboard = (): JSX.Element => {
  const keyValues = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "delete",
  ];

  const { addNumber, deleteNumber } = useContext(PhoneContext);

  return (
    <ol className="keyboard">
      {keyValues.map((keyValue, position) => (
        <Key
          text={position === keyValues.length - 1 ? "key big" : "key"}
          keyValue={keyValue}
          action={position === keyValues.length - 1 ? deleteNumber : addNumber}
        />
      ))}
    </ol>
  );
};

export default Keyboard;

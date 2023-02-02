import { useContext } from "react";
import PhoneContext from "../../store/contexts/PhoneContext";
import Key from "../Key/Key";

const Keyboard = (): JSX.Element => {
  const keyValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const { addNumber } = useContext(PhoneContext);

  return (
    <ol className="keyboard">
      {keyValues.map((keyValue) => (
        <Key keyValue={keyValue} action={addNumber} />
      ))}

      <li>
        <button className="key big">delete</button>
      </li>
    </ol>
  );
};

export default Keyboard;

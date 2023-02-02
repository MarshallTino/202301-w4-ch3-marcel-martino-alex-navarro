interface KeyProps {
  keyValue: string;
  action: (value: string) => void;
  text: string;
}

const Key = ({ keyValue, action, text }: KeyProps): JSX.Element => {
  return (
    <li>
      <button className={text} onClick={() => action(keyValue)}>
        {keyValue}
      </button>
    </li>
  );
};

export default Key;

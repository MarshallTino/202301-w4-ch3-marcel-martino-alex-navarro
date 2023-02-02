interface KeyProps {
  keyValue: string;
  action: (value: string) => void;
}

const Key = ({ keyValue, action }: KeyProps): JSX.Element => {
  return (
    <li>
      <button className="key" onClick={() => action(keyValue)}>
        {keyValue}
      </button>
    </li>
  );
};

export default Key;

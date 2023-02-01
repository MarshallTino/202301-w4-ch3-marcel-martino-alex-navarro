interface KeyProps {
  keyValue: number | string;
}

const Key = ({ keyValue }: KeyProps): JSX.Element => {
  return (
    <li>
      <button className="key">{keyValue}</button>
    </li>
  );
};

export default Key;

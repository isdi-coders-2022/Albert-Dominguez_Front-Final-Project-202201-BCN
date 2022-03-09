type ButtonProps = {
  text: string;
  actionOnClick: () => void;
};

const Button = ({ text, actionOnClick }: ButtonProps): JSX.Element => {
  return <button onClick={actionOnClick}>{text}</button>;
};

export default Button;

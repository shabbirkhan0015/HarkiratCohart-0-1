const Button = ({ onClick, label = "Click" }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;

type ButtonProps = {
  type: "button" | "submit" | "reset";
  className: string;
  btnName: string;
  onClick?: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type}
      className={props.className}
      onClick={props.onClick}
    >
      {props.btnName}
    </button>
  );
};

export default Button;

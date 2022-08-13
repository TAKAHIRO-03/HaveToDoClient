type LavelProps = {
  text: string;
  htmlFor?: string;
  className?: string;
};

type InputProps = {
  label: LavelProps;
  type: "checkbox" | "text" | "password";
  id?: string;
  className: string;
  name: string;
  register: any;
};

const InputValue = (props: InputProps) => {
  return (
    <>
      <label htmlFor={props.label.htmlFor} className={props.label.className}>
        {props.label.text}
      </label>
      <input
        id={props?.id}
        type={props.type}
        {...props.register(props.name)}
        className={props.className}
      />
    </>
  );
};

export default InputValue;

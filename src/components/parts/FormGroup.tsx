type FormGroupProps = {
  className?: string;
  errorMsg?: string;
  children: React.ReactNode;
};

const FormGroup = (props: FormGroupProps) => {
  return (
    <div
      className={
        props.className !== null || props.className !== undefined
          ? props.className
          : "form-group"
      }
    >
      {props.children}
      <div className="invalid-feedback">{props?.errorMsg}</div>
    </div>
  );
};

export default FormGroup;

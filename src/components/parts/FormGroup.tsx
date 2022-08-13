type FormGroupProps = {
  className?: string;
  errorMsg?: string;
  children: React.ReactNode;
};

const FormGroup = (props: FormGroupProps) => {
  const errorElement =
    props?.errorMsg !== undefined ? (
      <div className="invalid-feedback">{props?.errorMsg}</div>
    ) : undefined;
  return (
    <div
      className={props.className !== undefined ? props.className : "form-group"}
    >
      {props.children}
      {errorElement}
    </div>
  );
};

export default FormGroup;

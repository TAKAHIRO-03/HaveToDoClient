import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { validateEmail, validatePassword } from "./util/ValidationUtil";
import { useContext, useState } from "react";
import { LoginRepository, LoginRequest } from "../../api/rest/LoginRepository";
import { DiConteinerContext } from "../../App";
import axios from "axios";
import { BaseResponse } from "../../api/rest/base/BaseResponse";
import FormGroup from "../parts/FormGroup";
import InputValue from "../parts/InputValue";
import { Button } from "@mui/material";
import {
  SuccessedDialog,
  SuccessedDialogProps,
} from "../parts/SuccessedDialog";
import { useNavigate } from "react-router-dom";
import { resolveDiConteinerContext } from "../../di/DependencyRegistrar";

type LoginForm = {
  email: string;
  password: string;
};

const LoginSection = () => {
  const validationSchema = Yup.object().shape({
    email: validateEmail,
    password: validatePassword,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();
  const [dialogConfig, setDialogConfig] = useState<SuccessedDialogProps>();
  const openDialog = async () => {
    await new Promise<string>((resolve) => {
      setDialogConfig({
        onClose: resolve,
        message: "Successed Login.",
      });
    });
    setDialogConfig(undefined);
    navigate("/tasks");
  };

  const loginRepo: LoginRepository = resolveDiConteinerContext(
    useContext(DiConteinerContext)
  ).resolve("loginRepo");
  const onSubmit = (data: LoginForm) => {
    const req: LoginRequest = new LoginRequest(data.email, data.password);
    loginRepo.post(req).then((res) => {
      if (axios.isAxiosError(res) || (res as BaseResponse).status !== 200) {
        navigate("/error");
      }
      openDialog(/* JWTを渡す */);
    });
  };

  // When user doesn't have any errors, false other true.
  const buttonState = Object.keys(errors).length !== 0;

  return (
    <main className="signup">
      <div className="signup-title">アカウント登録</div>
      <div className="register-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup errorMsg={errors.email?.message}>
            <InputValue
              label={{
                text: "Email",
              }}
              type="text"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              name="email"
              register={register}
            />
          </FormGroup>
          <FormGroup errorMsg={errors.password?.message}>
            <InputValue
              label={{
                text: "Password",
              }}
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              name="password"
              register={register}
            />
          </FormGroup>
          <FormGroup>
            <Button
              type="submit"
              variant="contained"
              disabled={buttonState === undefined ? true : buttonState}
              className="btn btn-primary"
            >
              Login
            </Button>
          </FormGroup>
          {dialogConfig && <SuccessedDialog {...dialogConfig} />}
        </form>
      </div>
    </main>
  );
};

export default LoginSection;

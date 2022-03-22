import React from "react";
import * as S from "./Auth.style";
import bgImage from "../../assets/img/background.jpg";
import RegisterForm from "./components/RegisterForm";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/actions/authAction";
import { useNavigate } from "react-router-dom";

function Register() {
  //Redux hooks
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.auth);

  //Hooks
  const navigate = useNavigate();

  //* (onSubmitRegister)
  const onSubmitRegister = (registerForm) => {
    dispatch(register(registerForm));
    if (success === true) {
      navigate("/login");
    }
  };

  return (
    <S.AuthContainer bgImage={bgImage}>
      <RegisterForm onSubmitRegister={onSubmitRegister} />
    </S.AuthContainer>
  );
}

export default Register;

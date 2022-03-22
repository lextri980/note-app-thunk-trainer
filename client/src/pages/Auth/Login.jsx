import React from "react";
import * as S from "./Auth.style";
import bgImage from "../../assets/img/background.jpg";
import LoginForm from "./components/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/authAction";
import { Navigate } from "react-router-dom";
import Spinner from "../../components/Layouts/Spinner";

function Login() {
  //Redux hooks
  const dispatch = useDispatch();
  const { loading, isAuthenticated } = useSelector((state) => state.auth);

  //Hooks

  //Local state

  //* (onSubmitLogin)
  const onSubmitLogin = (loginForm) => {
    dispatch(login(loginForm));
  };

  //* Body initialize
  let body;

  if (loading) {
    body = <Spinner width={70} height={70} />;
  } else if (isAuthenticated) {
    return <Navigate to="/note" />;
  } else {
    body = (
      <S.AuthContainer bgImage={bgImage}>
        <LoginForm onSubmitLogin={onSubmitLogin} />
      </S.AuthContainer>
    );
  }

  return <>{body}</>;
}

export default Login;

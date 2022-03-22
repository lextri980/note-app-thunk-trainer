import React, { useState } from "react";
import * as S from "./AuthForm.style";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { Input, Button, InputGroup } from "reactstrap";
import { Link } from "react-router-dom";
import eyeIcon from "../../../assets/icon/eye.svg";
import eyeBlockIcon from "../../../assets/icon/eyeBlock.svg";

function RegisterForm(props) {
  //Local state
  const [type, setType] = useState("password");
  const [eyeIco, setEyeIco] = useState(eyeIcon);

  //* (handleTogglePassword)
  const handleTogglePassword = () => {
    if (eyeIco === eyeIcon) {
      setEyeIco(eyeBlockIcon);
    } else {
      setEyeIco(eyeIcon);
    }
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  //Initial values
  const initValue = {
    username: "",
    name: "",
    password: "",
    confirmPassword: "",
  };

  //Yup validation
  const validationSchema = yup.object().shape({
    username: yup.string().required(),
    name: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
  });

  return (
    <S.AuthFormContainer  >
      <span className="title">Register Form</span>
      <Formik
        initialValues={initValue}
        validationSchema={validationSchema}
        onSubmit={props.onSubmitRegister}
        enableReinitialize={true}
      >
        {(formikProps) => {
          const { values, error, isValid, touched, dirty, handleChange } =
            formikProps;
          return (
            <Form className="login-form">
              <Input
                className="input"
                type="text"
                placeholder="Username"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
              <Input
                className="input"
                type="text"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <InputGroup className="input-group">
                <Input
                  type={type}
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <Button
                  onClick={() => handleTogglePassword()}
                  outline
                  color="success"
                >
                  <img
                    style={{ width: "25px", height: "25px" }}
                    src={eyeIco}
                    alt="showPassword"
                  />
                </Button>
              </InputGroup>
              <InputGroup className="input-group">
                <Input
                  type={type}
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                <Button
                  onClick={() => handleTogglePassword()}
                  outline
                  color="success"
                >
                  <img
                    style={{ width: "25px", height: "25px" }}
                    src={eyeIco}
                    alt="showPassword"
                  />
                </Button>
              </InputGroup>
              <Button
                className="submit-btn"
                color="info"
                disabled={!(isValid && dirty)}
              >
                <strong>Register</strong>
              </Button>
            </Form>
          );
        }}
      </Formik>
      <span className="change-form">
        Have an account? <Link to="/login">Login</Link>{" "}
      </span>
    </S.AuthFormContainer>
  );
}

export default RegisterForm;

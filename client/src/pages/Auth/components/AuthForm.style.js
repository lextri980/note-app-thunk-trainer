import styled from "styled-components";

export const AuthFormContainer = styled.div`
  height: fit-content;
  width: 400px;
  color: black;
  background-color: rgb(200, 248, 252, 0.9);
  padding: 40px 60px;

  .title {
    font-size: 32px;
    font-weight: 600;
  }

  .login-form {
    display: flex;
    flex-direction: column;

    .input {
      width: 100%;
      height: 35px;
      margin-top: 20px;
      padding-left: 10px;
      border: none;
      border-radius: 0;
    }

    Input {
      border-radius: 0;
    }

    .input-group {
      margin-top: 20px;
    }

    .submit-btn {
      margin: 20px 0 15px;
      color: white;
    }
  }

  .change-form {
    font-size: 13px;
  }

  Button:disabled {
    background-color: rgb(125, 127, 128);
    border: none;
  }

  Button:focus {
    box-shadow: none;
  }
`;

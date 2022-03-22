import styled from "styled-components";

export const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${(props) => props.bgImage}) no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

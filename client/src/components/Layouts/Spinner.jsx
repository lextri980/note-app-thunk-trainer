import React from "react";
import reactLogo from "../../assets/icon/reactLogo.svg";
import * as S from "./Spinner.style";

function Spinner({ width, height }) {
  return (
    <S.SpinnerContainer width={width} height={height}>
      <img className="spinner" src={reactLogo} alt="spinner" />
    </S.SpinnerContainer>
  );
}

export default Spinner;

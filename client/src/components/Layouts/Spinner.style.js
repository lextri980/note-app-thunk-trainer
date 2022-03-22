import styled from "styled-components";

export const SpinnerContainer = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    .spinner {
      animation: spin infinite 1.3s linear;
      /* width: 70px; */
      height: ${(props) => props.height || 50}px;
      width: ${(props) => props.width || 50}px;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

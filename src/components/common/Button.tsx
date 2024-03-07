import { FC } from "react";
import styled from "styled-components";

interface Iprops {
  label: string;
  type?: "button" | "submit" | "reset";
}

const Button: FC<Iprops> = ({ label, type }) => {
  return <StyledBotton type={type || "button"}>{label}</StyledBotton>;
};

export default Button;

const StyledBotton = styled.button`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
  padding: 0px 25px 0px 25px;
  height: 45px;
  border: none;
  min-width: 80px;
  cursor: pointer;
`;

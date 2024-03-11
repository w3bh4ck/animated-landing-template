import { FC } from "react";
import styled from "styled-components";

interface Iprops {
  label: string;
  type?: "button" | "submit" | "reset";
  bgColor?: string;
}

const Button: FC<Iprops> = ({ label, type, bgColor }) => {
  return (
    <StyledBotton bgColor={bgColor} type={type || "button"}>
      {label}
    </StyledBotton>
  );
};

export default Button;

interface StyleProps {
  bgColor?: string;
}
const StyledBotton = styled.button<StyleProps>`
  border-radius: 16px;
  background-color: ${(props) => props.bgColor || props.theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
  padding: 0px 25px 0px 25px;
  height: 45px;
  border: none;
  min-width: 80px;
  cursor: pointer;
  border-shadow: 0px 10px 10px
    ${(props) => props.bgColor || props.theme.colors.white};
`;

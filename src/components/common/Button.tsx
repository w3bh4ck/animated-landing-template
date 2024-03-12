import { FC } from "react";
import styled from "styled-components";

interface Iprops {
  label: string;
  type?: "button" | "submit" | "reset";
  bgColor?: string;
  height?: string;
  width?: string;
  color?: string;
}

const Button: FC<Iprops> = ({ label, type, bgColor, height, width, color }) => {
  return (
    <StyledBotton
      height={height}
      width={width}
      bgColor={bgColor}
      type={type || "button"}
      color={color}
    >
      {label}
    </StyledBotton>
  );
};

export default Button;

interface StyleProps {
  bgColor?: string;
  height?: string;
  width?: string;
  color?: string;
}
const StyledBotton = styled.button<StyleProps>`
  border-radius: 16px;
  background-color: ${(props) => props.bgColor || props.theme.colors.white};
  color: ${(props) => (props.color ? props.color : props.theme.colors.dark)};
  padding: 0px 25px 0px 25px;
  height: ${(props) => props.height || "45px"};
  width: ${(props) => props.width || "auto"};
  border: none;
  min-width: 80px;
  cursor: pointer;
  border-shadow: 0px 10px 10px
    ${(props) => props.bgColor || props.theme.colors.white};
`;

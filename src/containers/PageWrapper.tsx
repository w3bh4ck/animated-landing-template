import { FC } from "react";
import styled from "styled-components";

const MAX_WIDTH = "1440px";

interface Iprops {
  children: React.ReactNode;
}
const PageWrapper: FC<Iprops> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default PageWrapper;

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: ${MAX_WIDTH};
  width: 100%;
  background-color: #ffffff;
`;

import { FC } from "react";
import styled from "styled-components";

interface Iprops {
  label: string;
}
const ActionTab: FC<Iprops> = ({ label }) => {
  return (
    <StyledActionTab>
      <div className="action-text">{label}</div>
      <div className="add-button">
        <div className="plus">+</div>
      </div>
    </StyledActionTab>
  );
};

export default ActionTab;

const StyledActionTab = styled.div`
  height: 60px;
  width: 400px;
  border-radius: 30px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  margin-top: 30px;
  box-shadow: 0px 10px 10px ${({ theme }) => theme.colors.white};
  .action-text {
    margin-top: 15px;
    padding-left: 10px;
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.dark};
  }

  .add-button {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-top: 10px;
    margin-right: 5px;
    cursor: pointer;
    margin-top: 10px;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  .plus {
    text-align: center;
    margin-top: 10px;
    font-weight: 500;
    font-size: 16px;
    f
  }
`;

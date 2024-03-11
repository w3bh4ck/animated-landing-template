import { FC } from "react";
import styled from "styled-components";
import { Icon } from "../../components/common/Icon";

interface Iprops {
  percentage: number;
}
const VisitorsProgress: FC<Iprops> = ({ percentage }) => {
  return (
    <StyledVisitorsProgress>
      <div>Visitors</div>
      <ProgressBarWrapper>
        <ProgressBarFiller percentage={percentage} />
      </ProgressBarWrapper>
      <div className="flx">
        <div className="total-profit">56K</div>
        <div className="up-stat flx">
          <Icon svg="up-stat" height={20} width={20} />{" "}
          <div className="stat-change">+14%</div>
        </div>
      </div>
    </StyledVisitorsProgress>
  );
};

export default VisitorsProgress;

const StyledVisitorsProgress = styled.div`
  width: 230px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  margin-left: 5px;
  font-size: 12px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.dark};

  .total-profit {
    font-size: 24px;
    padding-top: 10px;
    color: ${({ theme }) => theme.colors.dark};
  }

  .stat-change {
    color: #31c174;
    padding-top: -10px;
  }

  .up-stat {
    padding-top: 10px;
    padding-left: 5px;
  }
`;

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 3px;
  background-color: #e4e4e4;
  border-radius: 10px;
  margin-top: 10px;
`;

const ProgressBarFiller = styled.div<Iprops>`
  height: 100%;
  border-radius: 10px;
  background-color: #31c174;
  width: ${(props) => props.percentage}%;
`;

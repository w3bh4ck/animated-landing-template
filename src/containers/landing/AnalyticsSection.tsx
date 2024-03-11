import styled from "styled-components";
import Button from "../../components/common/Button";
import { Icon } from "../../components/common/Icon";
import VisitorsProgress from "./VisitorsProgress";
import VisitStat from "./VisitStat";
import WidgetControl from "./widgetControl";

const AnalyticsSection = () => {
  return (
    <StyledAnalyticsSection>
      <div className="flx between">
        <div className="section-header">
          Your Key to strategic success through analytics
        </div>
        <div className="regular-text">
          Ready for exciting, instantenous, all-accessible insight in real time?
        </div>
      </div>
      <div className="flx between mt-5">
        <div className="analytics-sample flx between">
          <div>
            <Button bgColor="#FFD026" label="Setting up reports" />
            <div className="sub-heading">Fast and easy access to analytics</div>
            <div className="sm-text pt-2">
              One platform is a comprehensive system of solutions thatwill be
              the first step towards digitization of your business!
            </div>
          </div>
          <div className="sales-statistics">
            <div className="pl-2 pt-2 stat-heading">Sales Statistics</div>
            <div className="sales-stat flx between">
              <div>
                <Icon svg="stack" height={60} width={60} />
              </div>
              <div className="pl-1 w-10">
                <div className="sm-text">Total Profit</div>
                <div className="total-profit">$ 264,2K</div>
              </div>
              <VisitorsProgress percentage={60} />
            </div>
            <div className="pr-2 pl-2">
              <VisitStat />
            </div>
          </div>
        </div>
        <div className="widget-control">
          <WidgetControl />
        </div>
      </div>
    </StyledAnalyticsSection>
  );
};

export default AnalyticsSection;

const StyledAnalyticsSection = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 100px;
  padding: 80px;

  .section-header {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.dark};
    width: 500px;
  }

  .regular-text {
    font-size: 20px;
    width: 300px;
    padding-right: 100px;
    color: ${({ theme }) => theme.colors.dark};
  }

  .analytics-sample {
    width: 55%;
    background-color: #ffffff;
    border-radius: 30px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    padding: 30px 0px 20px 30px;
    border-bottom-right-radius: 30px;
  }

  .sub-heading {
    margin-top: 60px;
    font-size: 24px;
    width: 250px;
    color: ${({ theme }) => theme.colors.dark};
  }

  .sm-text {
    font-size: 16px;
    width: 250px;
    color: #a3a3a3;
  }

  .sales-statistics {
    width: 380px;
    height: 320px;
    background-color: #ffffff;
    border-top-left-radius: 20px;
    border-left: 1px solid ${({ theme }) => theme.colors.white};
    border-top: 1px solid ${({ theme }) => theme.colors.white};
  }

  .stat-heading {
    font-weight: 500;
  }

  .sales-stat {
    padding: 20px;
  }

  .total-profit {
    padding-top: 10px;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.dark};
  }

  .widget-control {
    width: 45%;
    margin-left: 15px;
  }
`;

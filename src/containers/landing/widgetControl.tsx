import styled from "styled-components";
import { Icon } from "../../components/common/Icon";

const WidgetControl = () => {
  return (
    <StyledWidgetControl>
      <div className="flx center widgets">
        <div className="widget">
          <div className="widget-icon flex center">
            <Icon svg="stack-gold" height={25} width={25} />
          </div>
          <div className="headshots">
            <img
              src="https://amyjphoto.com/wp-content/uploads/2022/12/7597-LinkedIn-Crop-Sample.jpg"
              height={40}
              width={40}
              alt="widget"
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/5302d4d0e4b04574853df48d/1577734122502-UK2OAA6VHYQ6PFXRVBWD/Studio%2BHeadshots%2BPortland%2BOR.jpg"
              height={40}
              width={40}
              className="left"
              alt="widget"
            />
          </div>
        </div>
        <div className="widget">
          <div className="widget-name">Transactions</div>
          <div className="up-stat flx ">
            <Icon svg="up-stat" height={20} width={20} />{" "}
            <div className="stat-change">+14%</div>
          </div>
          <div className="tnx-change">43K</div>
        </div>
      </div>
      <div className="header">Widget Control</div>
      <div className="flx center">
        <div className="description ">
          Reports provide a comprehensive overview of important aspects of web
          analytics
        </div>
      </div>
    </StyledWidgetControl>
  );
};

export default WidgetControl;

const StyledWidgetControl = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 2px;
  height: 360px;
  border-radius: 30px;

  .stat-change {
    color: #31c174;
    padding-top: -10px;
  }

  .header {
    font-size: 24px;
    text-align: center;
    padding-top: 30px;
    color: ${({ theme }) => theme.colors.white};
  }

  .up-stat {
    padding-top: 10px;
    padding-right: 25px;
    display: flex;
    justify-content: right;
  }

  .tnx-change {
    font-size: 38px;
    padding-top: 10px;
    text-align: center;
    padding-right: 20px;
    color: ${({ theme }) => theme.colors.white};
  }

  .widgets {
    padding-top: 50px;
    gap: 20px;
  }

  .widget {
    border: 1px solid #2c2b2b;
    height: 150px;
    width: 180px;
    border-radius: 30px;

    img {
      border-radius: 50%;
      layout: contain;
    }
  }

  .left {
    margin-left: -5px;
  }

  .widget-icon {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }

  .headshots {
    display: flex;
    justify-content: center;
    padding-top: 30px;
  }

  .widget-name {
    color: ${({ theme }) => theme.colors.white};
    font-size: 12px;
    padding-top: 20px;
    padding-left: 30px;
  }

  .description {
    text-align: center;
    padding-top: 10px;
    width: 310px;
    color: #8d8d8d;
  }
`;

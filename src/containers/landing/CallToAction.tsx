import styled from "styled-components";
import Button from "../../components/common/Button";

const CallToAction = () => {
  return (
    <StyledCallToAction>
      <div className="flx center">
        <img
          alt="cta-logo"
          src="/assets/images/cta-logo.png"
          height={100}
          width={100}
        />
      </div>
      <div className="lead">Get Started</div>
      <div className="flx center">
        <div className="tag-line">
          Turn information into advantage! Start using Ramos today. Sign up for
          a free trial
        </div>
      </div>
      <div className="cta-buttons flx center">
        <Button height="40px" width="150px" label="Request a demo" />
        <Button
          bgColor="#FE4A22"
          height="40px"
          width="150px"
          label="Start for free"
          color="white"
        />
      </div>
    </StyledCallToAction>
  );
};

export default CallToAction;

const StyledCallToAction = styled.div`
  padding-top: 50px;
  padding-bottom: 30px;

  img {
    border-radius: 30px;
    box-shadow: 0px 10px 10px ${({ theme }) => theme.colors.white};
  }

  .lead {
    margin-top: 20px;
    text-align: center;
    font-weight: 500;
    font-size: 120px;
  }

  .tag-line {
    margin-top: 20px;
    text-align: center;
    font-size: 24px;
    color: #9c9c9c;
    font-weight: 400;
    width: 500px;
  }

  .cta-buttons {
    margin-top: 50px;
    gap: 20px;
    padding-bottom: 50px;
  }
`;

import styled from "styled-components";

const ControlSection = () => {
  return (
    <StyledControlSection>
      <div className="hero-text">We give you full</div>
      <div className="hero-text">
        {" "}
        <span className="gray">control</span> over your data
      </div>

      <div className="flx center control-services">
        <div className="ctx">
          <img src="/assets/images/conversion.png" height={300} width={400} />
          <div>
            <div className="ctx-header">Improved customer service</div>
            <div className="ctx-description">
              Analytics helps optimize services by providing information on how
              to improve interactions with customers and increase their
              satisfaction.
            </div>
          </div>
        </div>
        <div className="ctx">
          <img src="/assets/images/insight.png" height={300} width={400} />
          <div>
            <div className="ctx-header">Monitoring key indicator</div>
            <div className="ctx-description">
              Analytics platforms allow businesses to track KPIs, an important
              tool for measuring success and achieving goals.
            </div>
          </div>
        </div>
      </div>
    </StyledControlSection>
  );
};

export default ControlSection;

const StyledControlSection = styled.div`
  padding: 50px 80px 50px 80px;
  .gray {
    color: #cccccc;
  }
  .hero-text {
    font-size: 100px;
    font-weight: 500;
    padding-left: 10px;
  }

  .ctx {
    height: 500px;
    width: 600px;
    background-color: ${({ theme }) => theme.colors.lightGray};
    border-radius: 30px;
    border: 1px solid #eaeaea;
    text-align: center;
    font-weight: 500;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    img {
      margin-top: 30px;
    }
  }

  .ctx-header {
    color: ${({ theme }) => theme.colors.dark};
    font-size: 28px;
  }

  .ctx-description {
    color: ${({ theme }) => theme.colors.dark};
    font-size: 16px;
    margin-top: 25px;
    text-align: center;
    padding-right: 120px;
    padding-left: 120px;
  }

  .control-services {
    padding-top: 50px;
    gap: 20px;
  }
`;

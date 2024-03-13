import styled from "styled-components";
import Button from "../../components/common/Button";

const EfficiencySection = () => {
  return (
    <StyledEfficiencySection>
      <div className="hero-text">
        Maximize <span className="gray">efficiency</span>
      </div>
      <div className="hero-text">with our intuitive</div>
      <div className="flx between">
        <div className="flx lap-icons">
          <StyledIconWrapper className="lap flx center" color="#f2f2f2">
            <div className="pulse-icon">
              <img
                alt="pulse"
                src="/assets/images/pulse.png"
                height={22}
                width={22}
              />
            </div>
          </StyledIconWrapper>
          <StyledIconWrapper color="#ffd026">
            <div className="growth">45%</div>
            <div>
              System grow <br /> faster
            </div>
          </StyledIconWrapper>
        </div>

        <div className="analytics-service">Analytics service</div>
      </div>
      <hr />
      <div className="flx between pt-2">
        <div className="advantages">
          Explore traffic sources, page behavior, conversions and more to gain
          deep insight into your audience. With us, your business doesn't just
          adapt -t evolves
        </div>
        <div className="flx actions">
          <Button height="40px" width="150px" label="Request a demo" />
          <Button
            bgColor="#FE4A22"
            height="40px"
            width="150px"
            label="Start for free"
            color="white"
          />
        </div>
      </div>
    </StyledEfficiencySection>
  );
};

export default EfficiencySection;

const StyledEfficiencySection = styled.div`
  padding: 100px 50px 30px 80px;
  padding-bottom: 100px;
  .gray {
    color: #cccccc;
  }
  .hero-text {
    font-size: 100px;
    font-weight: 500;
    padding-left: 10px;
  }

  .lap {
    margin-right: -10px;
    z-index: 2;
  }
  .pulse-icon {
    margin-top: 30px;
  }

  .analytics-service {
    height: 80px;
    width: 300px;
    background-color: #ffd026;
    border-radius: 30px;
    text-align: center;
    font-size: 62px;
    overflow-x: scroll;
    white-space: nowrap;
    font-weight: 500;
    margin-right: 50px;
  }

  .advantages {
    width: 580px;
  }

  hr {
    margin-top: 45px;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
  }

  .actions {
    gap: 20px;
    margin-right: 50px;
  }
`;

const StyledIconWrapper = styled.div<{ color: string }>`
  border-radius: 50%;
  height: 80px;
  width: 80px;
  font-size: 9px;
  text-align: center;
  background-color: ${({ color }) => color};

  .growth {
    font-size: 16px;
    margin-top: 20px;
    font-weight: 500;
  }
`;

import styled from "styled-components";
import ActionTab from "../../components/ActionTab";

const actions = ["Instant Insights", "AI Technology", "Easy Integration"];

const SampleBrand = () => {
  return (
    <StyledSampleWrapper>
      <div className="section-header">
        Turning data into real actions and Ideas
      </div>
      <div className="flx between">
        <div className="actions">
          {actions.map((action, i) => (
            <ActionTab key={`key_${i}`} label={action} />
          ))}
        </div>
        <div className="brand">
          <img
            className="brand-img"
            alt="brand"
            src="/assets/images/ramos-sample.png"
            height={900}
            width={900}
          />
        </div>
      </div>
      <div className="legend">Ramos</div>
    </StyledSampleWrapper>
  );
};

export default SampleBrand;

const StyledSampleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 100px;
  padding: 80px 0px 10px 80px;

  .section-header {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.dark};
    width: 500px;
  }

  .actions {
    margin-top: 50px;
  }

  .brand {
    margin-top: -150px;
    z-index: 2;
  }

  .legend {
    color: #fe4a22;
    font-size: 394px;
    text-align: center;
    font-weight: 600;
    margin-top: -280px;
  }
`;

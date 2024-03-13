import styled from "styled-components";

const CallToAction = () => {
  return (
    <StyledCallToAction>
      <div className="flx center">
        <img src="/assets/images/cta-logo.png" height={300} width={300} />
      </div>
    </StyledCallToAction>
  );
};

export default CallToAction;

const StyledCallToAction = styled.div``;

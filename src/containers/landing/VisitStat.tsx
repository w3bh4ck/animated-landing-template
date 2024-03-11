import styled from "styled-components";

const VisitStat = () => {
  return (
    <StyledVisitStat>
      <div className="heading">Visit statistics</div>
      <div>
        <img
          src="/assets/images/visit-chart.png"
          height={100}
          width={260}
          alt="visit-stat"
        />
      </div>
    </StyledVisitStat>
  );
};

export default VisitStat;

const StyledVisitStat = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.white};
  height: 135px;
  padding: 2px;
  border-radius: 10px;
  .heading {
    font-size: 14px;
    padding-top: 5px;
    padding-left: 5px;
    color: ${({ theme }) => theme.colors.dark};
  }
`;

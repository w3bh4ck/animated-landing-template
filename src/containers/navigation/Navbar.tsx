import styled from "styled-components";
import logo from "../../assets/ramos-logo.png";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="nav">
        <div>
          <img className="logo" src={logo} height={60} width={120} alt="logo" />
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.div`
  padding: 10px;

  .nav {
    width: 100%;
    background-color: #000000;
    height: 60px;
    padding: 2px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
  }

  .logo {
    margin-left: 2px;
  }
`;

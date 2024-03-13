import styled from "styled-components";
import logo from "../../assets/ramos-logo.png";
import Button from "../../components/common/Button";

const navList = [
  { lable: "Dashboard", path: "#" },
  { lable: "Reports", path: "#" },
  { lable: "Documents", path: "#" },
  { lable: "History", path: "#" },
  { lable: "Settings", path: "#" },
];

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="nav">
        <div>
          <img alt="logo" className="logo" src={logo} height={60} width={120} />
        </div>
        <div>
          <ul className="nav-list">
            {navList.map((item) => (
              <li>
                <a href={item.path}>{item.lable}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="action">
          <Button label="Sign Up" />
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
    background-color: ${({ theme }) => theme.colors.dark};
    height: 60px;
    padding: 2px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
  }

  .logo {
    margin-left: 2px;
  }

  .nav-list {
    display: flex;
    list-style: none;
    padding: 0px 20px 0px 20px;
    align-items: center;
    gap: 40px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.gray};
    height: 40px;
    margin-top: 12px;
    border-radius: 12px;
    font-size: 12px;
  }

  .action {
    padding: 8px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`;

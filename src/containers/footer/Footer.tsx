import styled from "styled-components";

const footerNavs = [
  { page: "About", link: "/" },
  { page: "Why Us", link: "/" },
  { page: "Pricing", link: "/" },
  { page: "Contacts", link: "/" },
];

const socials = [
  { name: "Linkedin", link: "/" },
  { name: "Instagram", link: "/" },
  { name: "Facebook", link: "/" },
];

const Footer = () => {
  return (
    <StyledFooter>
      <div className="flx between">
        <div className="nav-links flex">
          {footerNavs.map((nav) => (
            <a key={`key_${nav.link}`} href={nav.link}>
              {nav.page}
            </a>
          ))}
        </div>
        <div className="email">hello@ramos.com</div>
      </div>

      <hr />

      <div className="flx between pt-2">
        <div className="flx branches">
          <div>
            <div className="city">Warrensville Heights</div>
            <div className="address">
              1448 Vineyard Drive, NC <br />
              44128
            </div>
          </div>
          <div>
            <div className="city">Saint Louis</div>
            <div className="address">
              13666 Penn Street <br />
              63101
            </div>
          </div>
        </div>
        <div className="socials">
          {socials.map((social) => (
            <div className="social" key={`key_${social.name}`}>
              <a href={social.link} target="_blank">
                {social.name}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flx between pt-2">
        <img
          alt="ramos"
          src="/assets/images/ramos-r.png"
          height={150}
          width={450}
        />
        <div className="address mt-8">Privacy policy</div>
        <div className="address mt-8">Licence agreement</div>
        <img
          src="/assets/images/qr-code.png"
          className="mt-4 rounded"
          alt="qr-code"
          height={100}
          width={100}
        />
      </div>
    </StyledFooter>
  );
};

export default Footer;
const StyledFooter = styled.div`
  padding: 50px 80px 30px 80px;
  min-height: 400px;
  background-color: ${({ theme }) => theme.colors.dark};

  .nav-links {
    gap: 10px;

    a {
      color: #7e7e7e;
      font-size: 24px;
      font-weight: 300;
      text-decoration: none;
      margin-right: 30px;
    }
  }

  .email {
    color: ${({ theme }) => theme.colors.white};
    font-size: 68px;
  }

  hr {
    margin-top: 30px;
    border: 0.02rem solid #7e7e7e;
    margin-bottom: 20px;
  }

  .city {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
  }

  .address {
    color: #7e7e7e;
  }

  .branches {
    gap: 100px;
  }

  .socials {
    a {
      color: ${({ theme }) => theme.colors.white};
      font-size: 18px;
      font-weight: 300;
      text-decoration: none;
      margin-right: 10px;
    }
    .social {
      margin-top: 20px;
    }
  }
`;

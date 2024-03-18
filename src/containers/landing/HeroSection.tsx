import styled from "styled-components";
import { Icon } from "../../components/common/Icon";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { animateHero } from "../../utils/gsap.animate";

const HeroSection = () => {
  const heroContainer = useRef(null);

  useGSAP(() => animateHero(), { scope: heroContainer });

  return (
    <StyledLandingPage ref={heroContainer}>
      <div className="hero-wrapper">
        <div className="flx">
          <div>
            <div className="flx icons-set">
              <div className="pt-2">
                <Icon height={120} width={120} svg="bolt" />
                <Icon
                  className="node-icon"
                  height={120}
                  width={120}
                  svg="node"
                />
              </div>
              <div className="hero-text tx-1">Analytics</div>
            </div>
            <div className="hero-text pl-2 tx-2">
              that <span className="gray">helps</span> you
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/assets/images/laptop.png"
              height={270}
              width={400}
              alt="hero"
            />
          </div>
        </div>
        <div className="hero-text pl-2 flx center tx-3">
          Shape{" "}
          <div className="pt-2 pl-2 pr-2">
            <Icon className="voice" height={120} width={120} svg="voice" />
          </div>
          the future
        </div>
      </div>
    </StyledLandingPage>
  );
};

export default HeroSection;

const StyledLandingPage = styled.div`
  .hero-wrapper {
    padding: 50px 100px 50px 100px;
  }

  .icons-set {
    padding-left: 100px;
  }

  .hero-text {
    font-size: 120px;
    font-weight: 500;
    padding-left: 10px;
  }

  .gray {
    color: #cccccc;
  }

  .node-icon {
    margin-left: -30px;
  }

  .hero-image {
    padding-left: 20px;
  }

  .voice {
    pt
  }
`;

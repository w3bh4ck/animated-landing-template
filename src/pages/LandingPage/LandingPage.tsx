import HeroSection from "../../containers/landing/HeroSection";
import AnalyticsSection from "../../containers/landing/AnalyticsSection";
import EfficiencySection from "../../containers/landing/EfficiencySection";
import SampleBrand from "../../containers/landing/SampleBrand";
import ControlSection from "../../containers/landing/ControlSection";
import CallToAction from "../../containers/landing/CallToAction";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AnalyticsSection />
      <EfficiencySection />
      <SampleBrand />
      <ControlSection />
      <CallToAction />
    </div>
  );
};

export default LandingPage;

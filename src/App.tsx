import { ThemeProvider } from "styled-components";
import PageWrapper from "./containers/PageWrapper";
import Navbar from "./containers/navigation/Navbar";
import { theme } from "./assets/theme/theme";
import Landing from "./containers/landing/HeroSection";
import AnalyticsSection from "./containers/landing/AnalyticsSection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Navbar />
        <div>
          <Landing />
          <AnalyticsSection />
        </div>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;

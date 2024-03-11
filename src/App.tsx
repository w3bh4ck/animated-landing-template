import { ThemeProvider } from "styled-components";
import PageWrapper from "./containers/PageWrapper";
import Navbar from "./containers/navigation/Navbar";
import { theme } from "./assets/theme/theme";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Navbar />
        <LandingPage />
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;

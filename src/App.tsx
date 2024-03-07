import { ThemeProvider } from "styled-components";
import PageWrapper from "./containers/PageWrapper";
import Navbar from "./containers/navigation/Navbar";
import { theme } from "./assets/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Navbar />
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;

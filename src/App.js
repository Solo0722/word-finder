import "./App.less";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalProvider from "./context/GlobalContext";
import MainNav from "./components/MainNav";
import Dictionary from "./pages/dictionary";
import Home from "./pages/home";
import styled from "styled-components";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalProvider>
        <MainNav />
        <RoutesWrapper>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/dictionary" element={<Dictionary />} />
          </Routes>
        </RoutesWrapper>
        <Footer />
      </GlobalProvider>
    </Router>
  );
}

const RoutesWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);

  padding: 2rem 5rem;

  @media screen and (max-width: 768px) {
    & {
      padding: 2rem;
    }
  }
`;

export default App;

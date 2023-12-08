import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import PageWrapper from "./pages/page-helper/PageWrapper";
import Dashboard from "./pages/Dashboard";
import Providers from "./provider/Provider";

function App() {
  return (
    <Router basename="/">
      <Providers>
        <AppContainer>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <PageWrapper>
                  <Dashboard />
                </PageWrapper>
              }
            />
            <Route path="/" element={<div>test</div>} />
          </Routes>
        </AppContainer>
      </Providers>
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  text-align: center;
`;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PreQualified from './pages/PreQualified';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/oic" element={<LandingPage customHeadline="See If You Qualify To Settle Your Tax Debt For Less Using An Offer In Compromise" />} />
        <Route path="/prequalified" element={<PreQualified />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App


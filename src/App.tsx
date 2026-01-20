import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PreQualified from './pages/PreQualified';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/oic" element={<LandingPage />} />
        <Route path="/prequalified" element={<PreQualified />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PreQualified from './pages/PreQualified';
import styles from './pages/LandingPage.module.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/backtaxes" element={
          <LandingPage
            customAttentionNormal={
              <>
                Taxpayers & Business Owners Owing{' '}
                <span className={styles.heroHeadlineHighlight}>$10,000+</span> In Back Taxes:
              </>
            }
          />
        } />
        <Route path="/oic" element={<LandingPage customHeadline="See If You Qualify To Settle Your Tax Debt For Less Using An Offer In Compromise" customAttention="Owe The IRS $10,000+?" />} />
        <Route path="/prequalified" element={<PreQualified />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App


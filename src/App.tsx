import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PreQualified from './pages/PreQualified';
import CallPage from './pages/CallPage';
import styles from './pages/LandingPage.module.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/call" element={<CallPage />} />
        <Route path="/backtaxes" element={
          <LandingPage
            customAttentionNormal={
              <>
                Taxpayers & Business Owners Owing{' '}
                <span className={styles.heroHeadlineHighlight}>$10,000+</span> In Back Taxes:
              </>
            }
            customHeadline="See How Our Clients Cut $9,976, $38,000, Even $159,000 Off Their IRS Debt (And If You Qualify Too)"
          />
        } />
        <Route path="/oic" element={<LandingPage customHeadline="See If You Qualify To Settle Your Tax Debt For Less Using An Offer In Compromise" customAttention="Owe The IRS $10,000+?" />} />
        <Route path="/prequalified" element={<PreQualified />} />
        <Route path="/callprequalified" element={<PreQualified phoneNumber="+18669992007" buttonText="Call Now (866) 999-2007" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App


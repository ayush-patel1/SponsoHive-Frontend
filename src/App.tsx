
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ComplianceDashboard from "./pages/ComplianceDashboard";
import AnalyticsPage from "./pages/CoreFeatures/analytics/AnalyticsDashboard";
import './styles/global.css';
import EmailListManager from "./pages/CoreFeatures/emails/EmailListManager";
import CampaignAutomation from "./pages/CoreFeatures/Campaign/CampaignAutomation";
import ComplianceDashboard from "./pages/CoreFeatures/Compilance/ComplianceDashboard";
import LoginPage from "./pages/Login";
import SignPage from "./pages/Signup";
import TemplateInsights from "./pages/CoreFeatures/templateAndInsights/TemplatesInsights";
import BulkUpload from "./pages/CoreFeatures/Campaign/BulkUpload";
import Personalization from "./pages/personalization";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect the root path ("/") to the LoginPage */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<SignPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/template-insights" element={<TemplateInsights />} />
        <Route path="/dashboard/analytics" element={<AnalyticsPage />} />
        <Route path="/dashboard/compilance" element={<ComplianceDashboard />} />
        <Route path="/dashboard/campaign" element={<CampaignAutomation />} />
        <Route path="/dashboard/addfile" element={<BulkUpload/>} />
        <Route path="/dashboard/emails" element={<EmailListManager/>} />
        <Route path="/dashboard/compliance" element={<ComplianceDashboard/>} />
        <Route path="/personalization" element={<Personalization />} />

      </Routes>
    </Router>
  );
};

export default App;

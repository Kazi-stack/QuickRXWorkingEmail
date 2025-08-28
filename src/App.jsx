import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Transfer from './pages/Transfer'
import Refill from './pages/Refill'
import PrescriptionFilling from './pages/PrescriptionFilling'
import HealthConsultations from './pages/HealthConsultations'
import Vaccinations from './pages/Vaccinations'
import HealthScreening from './pages/HealthScreening'
import Moneygram from './pages/Moneygram'
import HomeDelivery from './pages/HomeDelivery'
import CopayAssistance from './pages/CopayAssistance'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import Newsletter from './pages/Newsletter'
// Blog Articles
import MedicationTypes from './pages/blog/MedicationTypes'
import HealthConsultationsBlog from './pages/blog/HealthConsultations'
import NutritionWellness from './pages/blog/NutritionWellness'
import PharmaceuticalResearch from './pages/blog/PharmaceuticalResearch'
import PharmacyTechnician from './pages/blog/PharmacyTechnician'
// Newsletter Archives
import WinterWellness from './pages/newsletter/WinterWellness'
import HealthGoals from './pages/newsletter/HealthGoals'
import InsuranceBenefits from './pages/newsletter/InsuranceBenefits'
import HolidayTravel from './pages/newsletter/HolidayTravel'
// Copay Assistance Programs
import ManufacturerCoupons from './pages/copay/ManufacturerCoupons'
import PatientAssistance from './pages/copay/PatientAssistance'
import InsuranceSupport from './pages/copay/InsuranceSupport'
import GenericOptions from './pages/copay/GenericOptions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import HipaaNotice from './pages/HipaaNotice'
import Disclaimer from './pages/Disclaimer'
import ContentDisclaimer from './pages/ContentDisclaimer'
import Accessibility from './pages/Accessibility'
import Cookies from './pages/Cookies'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="transfer" element={<Transfer />} />
          <Route path="refill" element={<Refill />} />
          <Route path="prescription-filling" element={<PrescriptionFilling />} />
          <Route path="health-consultations" element={<HealthConsultations />} />
          <Route path="vaccinations" element={<Vaccinations />} />
          <Route path="health-screening" element={<HealthScreening />} />
          <Route path="moneygram" element={<Moneygram />} />
          <Route path="home-delivery" element={<HomeDelivery />} />
          <Route path="copay-assistance" element={<CopayAssistance />} />
          <Route path="careers" element={<Careers />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/medication-types" element={<MedicationTypes />} />
          <Route path="blog/health-consultations" element={<HealthConsultationsBlog />} />
          <Route path="blog/nutrition-wellness" element={<NutritionWellness />} />
          <Route path="blog/pharmaceutical-research" element={<PharmaceuticalResearch />} />
          <Route path="blog/pharmacy-technician" element={<PharmacyTechnician />} />
          <Route path="newsletter" element={<Newsletter />} />
          <Route path="newsletter/winter-wellness" element={<WinterWellness />} />
          <Route path="newsletter/health-goals" element={<HealthGoals />} />
          <Route path="newsletter/insurance-benefits" element={<InsuranceBenefits />} />
          <Route path="newsletter/holiday-travel" element={<HolidayTravel />} />
          <Route path="copay/manufacturer-coupons" element={<ManufacturerCoupons />} />
          <Route path="copay/patient-assistance" element={<PatientAssistance />} />
          <Route path="copay/insurance-support" element={<InsuranceSupport />} />
          <Route path="copay/generic-options" element={<GenericOptions />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="hipaa-notice" element={<HipaaNotice />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="content-disclaimer" element={<ContentDisclaimer />} />
          <Route path="accessibility" element={<Accessibility />} />
          <Route path="cookies" element={<Cookies />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App


import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './components/LanguageContext'
import Home from './pages/Home'
import AboutHistory from './pages/AboutHistory'
import AboutInternational from './pages/AboutInternational'
import AboutCompany from './pages/AboutCompany'
import AboutMission from './pages/AboutMission'
import ServiceDetail from './pages/ServiceDetail'
import ProjectDetailPage from './pages/ProjectDetailPage'

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/history" element={<AboutHistory />} />
        <Route path="/about/international" element={<AboutInternational />} />
        <Route path="/about/company" element={<AboutCompany />} />
        <Route path="/about/mission" element={<AboutMission />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
      </Routes>
    </LanguageProvider>
  )
}

export default App

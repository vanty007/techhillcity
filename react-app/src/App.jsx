import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ITServices from './pages/ITServices'
import WebDevelopment from './pages/WebDevelopment'
import MobileDevelopment from './pages/MobileDevelopment'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/it" element={<ITServices />} />
        <Route path="/services/web" element={<WebDevelopment />} />
        <Route path="/services/mobile" element={<MobileDevelopment />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App

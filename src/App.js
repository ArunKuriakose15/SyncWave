import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ServicePage from './components/ServicePage';
import Portfolio from './components/Portfolio';
import NotFoundPage from './components/NotFoundPage';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import CareersPage from './components/CareersPage';
import WhyChooseUsPage from './components/WhyChooseUsPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/services' element={<ServicePage />} />
          <Route path="/portfolio" element={< Portfolio />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="*" element={< NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

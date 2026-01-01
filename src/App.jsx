import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Kali from './pages/Kali/Kali';
import Psychology from './pages/Psychology/Psychology';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter basename="/resume">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="kali" element={<Kali />} />
              <Route path="psychology" element={<Psychology />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

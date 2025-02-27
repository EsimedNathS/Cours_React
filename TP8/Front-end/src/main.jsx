import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route} from "react-router";
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Page404 from '../pages/Page404.jsx'
import ListeCourse from '../pages/ListeCourse.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<ListeCourse />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Routine from './pages/products/Products.jsx';
import Contact from './pages/contact/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutme" element={<About/>} />
          <Route path="myproducts" element={<Routine/>} />
          {/* <Route path="credentials" element={<Credentials/>} /> */}
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

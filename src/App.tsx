import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Competition from './pages/Competition';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Sponsorship from './pages/Sponsorship';
import Watch from './pages/Watch';
import Register from './components/Register';
import RegistrationSuccess from './components/RegistrationSuccess';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer';
import { CartProvider } from './contexts/CartContext';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import PaymentSuccess from './pages/PaymentSuccess';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import BuildersChallenge from './pages/BuildersChallenge';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-black text-gray-300">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/competition" element={<Competition />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registration-success" element={<RegistrationSuccess />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />
            <Route path="/builders-challenge" element={<BuildersChallenge />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App
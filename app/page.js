"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Sparkles,
  Clock,
  Shield,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle,
  Truck,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";

const LaundryLandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Premium Wash & Fold",
      description:
        "Professional cleaning with premium detergents and fabric care",
      price: "From $2.99/lb",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Dry Cleaning",
      description: "Expert care for delicate fabrics and special garments",
      price: "From $8.99",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Pickup & Delivery",
      description: "Free pickup and delivery within 5 miles",
      price: "Free*",
    },
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      role: "Business Executive",
      content:
        "Their dry cleaning service is exceptional. My suits have never looked better, and the 24-hour turnaround is amazing.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "David Thompson",
      role: "Gym Owner",
      content:
        "CleanPro keeps our towels and uniforms spotless. Reliable service we can always count on.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=64&h=64&fit=crop&crop=face",
    },
    {
      name: "Michael Lee",
      role: "Software Engineer",
      content:
        "Pickup and delivery make laundry stress-free. Everything comes back fresh, clean, and folded perfectly.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=face",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "99.9%", label: "Customer Satisfaction" },
    { number: "24hr", label: "Express Service" },
    { number: "15+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CleanPro
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Services
              </a>

              <a
                href="#testimonials"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Schedule Pickup
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-4 py-2 mb-6 border border-blue-200/50">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  Premium Laundry Service
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                  Fresh, Clean,
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Delivered.
                </span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Experience the future of laundry with our premium pickup &
                delivery service. Professional cleaning, eco-friendly products,
                and unmatched convenience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2">
                  <span>Start Your Order</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-600">Free Pickup & Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-600">24 Hour Turnaround</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-600">Eco-Friendly Products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-600">Satisfaction Guarantee</span>
                </div>
              </div>
            </div>

            <div
              className={`relative transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl blur-2xl opacity-20 transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1604335398980-ededcadcc37d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGF1bmRyb21hdHxlbnwwfHwwfHx8Mg%3D%3D"
                  alt="Professional Laundry Service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-110 transition-all duration-300"
              >
                <div className="text-4xl lg:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From everyday wash & fold to specialized dry cleaning, we handle
              your garments with professional care and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-slate-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                  <div className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {service.price}
                  </span>
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-purple-600 transition-colors duration-300 group">
                    <span className="font-semibold">Learn More</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-slate-600">
              Getting your laundry done has never been easier
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Schedule Pickup",
                description:
                  "Book online or call us. We'll pick up your laundry at your convenience.",
              },
              {
                step: "02",
                title: "Professional Cleaning",
                description:
                  "Our experts clean your garments using premium, eco-friendly products.",
              },
              {
                step: "03",
                title: "Fresh Delivery",
                description:
                  "We deliver your clean, fresh laundry right back to your doorstep.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 text-white text-2xl font-bold shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-600">
              Don't just take our word for it - hear from our satisfied
              customers
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 shadow-xl">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-2xl lg:text-3xl font-medium text-slate-800 mb-8 leading-relaxed">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover shadow-lg"
                  />
                  <div>
                    <div className="text-lg font-bold text-slate-900">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-slate-600">
                      {testimonials[activeTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 scale-125"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Join thousands of satisfied customers and discover why CleanPro is
              the premier choice for laundry services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                Schedule Your First Pickup
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">CleanPro</span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Premium laundry service with pickup and delivery. Experience the
                convenience of professional cleaning with eco-friendly products
                and unmatched customer service.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-400">
                    123 Main St, City, State 12345
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-400">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-400">hello@cleanpro.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2025 CleanPro Laundry Services. All rights reserved. | Privacy
              Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LaundryLandingPage;

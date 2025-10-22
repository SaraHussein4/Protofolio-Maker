import React from 'react';
import Header from './Header';
import ChatBot from './ChatBot';
import Footer from './Footer';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: "fas fa-palette",
      title: "Portfolio Design",
      description: "Custom portfolio design tailored to your industry and personal style",
      price: "Starting at $15"
    },
    {
      icon: "fas fa-pen-fancy",
      title: "Content Writing",
      description: "Professional content writing for your portfolio sections",
      price: "Starting at $25"
    },
    {
      icon: "fas fa-search",
      title: "SEO Optimization",
      description: "Optimize your portfolio for search engines and better visibility",
      price: "Starting at $30"
    },
    {
      icon: "fas fa-globe",
      title: "Domain & Hosting",
      description: "Get your custom domain and professional hosting setup",
      price: "Starting at $10/month"
    },
    {
      icon: "fas fa-chart-line",
      title: "Analytics & Reports",
      description: "Monitor and analyze your portfolio performance with detailed monthly reports",
      price: "Starting at $20"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Security & Protection",
      description: "Comprehensive protection for your portfolio from online threats",
      price: "Starting at $35"
    }
  ];

  return (
    <div className="services-page">
      <Header />
      
      <div className="services-content">
        <div className="services-header">
          <h1>Our Services</h1>
          <p className="subtitle">Complete solutions for your professional portfolio needs</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="card-icon">
                <i className={service.icon}></i>
              </div>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-price">{service.price}</div>
                <button className="service-button">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Services;
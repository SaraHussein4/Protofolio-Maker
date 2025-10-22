import React from 'react';
import Header from './Header';
import ChatBot from './ChatBot';
import Footer from './Footer';
import './Templates.css';

const Templates = () => {
  const templates = [
    {
      id: 1,
      name: "Modern Clean",
      price: "$15",
      description: "Minimal design with clean layout, perfect for developers and tech professionals",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
      premium: false
    },
    {
      id: 2,
      name: "Creative Pro",
      price: "$20",
      description: "Bold and artistic design, ideal for designers and creative professionals",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
      features: ["Image Gallery", "Animations", "Portfolio Showcase"],
      premium: false
    },
    {
      id: 3,
      name: "Professional",
      price: "$18",
      description: "Corporate and formal design, best for business and executive profiles",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      features: ["Professional Layout", "Business Focused", "Trust Building"],
      premium: false
    },
    {
      id: 4,
      name: "Startup",
      price: "$16",
      description: "Modern and energetic design, great for entrepreneurs and startups",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      features: ["Modern Design", "Startup Ready", "Conversion Optimized"],
      premium: false
    },
    {
      id: 5,
      name: "Minimalist",
      price: "$14",
      description: "Simple and elegant design focusing on content and readability",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
      features: ["Clean Layout", "Content Focused", "Lightweight"],
      premium: false
    },
    {
      id: 6,
      name: "Portfolio Pro",
      price: "$25",
      description: "Advanced features with animations and interactive elements",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop",
      features: ["Advanced Animations", "Interactive Elements", "Premium Support"],
      premium: true
    },
    {
      id: 7,
      name: "Enterprise Elite",
      price: "$45",
      description: "Premium corporate template with advanced features",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop",
      features: ["Multi-page", "E-commerce Ready", "24/7 Support", "Custom Domain"],
      premium: true
    },
    {
      id: 8,
      name: "Ultimate Portfolio",
      price: "$35",
      description: "The most advanced portfolio template with AI integration",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      features: ["AI Integration", "Advanced Analytics", "Custom Components", "Priority Support"],
      premium: true
    }
  ];

  return (
    <div className="templates-page">
      <Header />
      
      <div className="templates-content">
        <h1>Choose Your Template</h1>
        <p className="subtitle">Professional portfolio templates for every industry</p>
        
        {/* الصف الأول - 4 كاردات */}
        <div className="templates-row">
          {templates.slice(0, 4).map(template => (
            <div key={template.id} className={`template-card ${template.premium ? 'premium' : ''}`}>
              <div className="template-image">
                <img src={template.image} alt={template.name} />
                {template.premium && (
                  <div className="premium-badge">
                    ⭐ Premium
                  </div>
                )}
              </div>
              <div className="template-info">
                <h3>{template.name}</h3>
                <p>{template.description}</p>
                <div className="template-features">
                  {template.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <div className="template-footer">
                  <span className="price">{template.price}</span>
                  <button className={`view-button ${template.premium ? 'premium-button' : ''}`}>
                    {template.premium ? 'Get Premium' : 'View Template'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* الصف الثاني - 4 كاردات */}
        <div className="templates-row">
          {templates.slice(4, 8).map(template => (
            <div key={template.id} className={`template-card ${template.premium ? 'premium' : ''}`}>
              <div className="template-image">
                <img src={template.image} alt={template.name} />
                {template.premium && (
                  <div className="premium-badge">
                    ⭐ Premium
                  </div>
                )}
              </div>
              <div className="template-info">
                <h3>{template.name}</h3>
                <p>{template.description}</p>
                <div className="template-features">
                  {template.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <div className="template-footer">
                  <span className="price">{template.price}</span>
                  <button className={`view-button ${template.premium ? 'premium-button' : ''}`}>
                    {template.premium ? 'Get Premium' : 'View Template'}
                  </button>
                </div>
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

export default Templates;
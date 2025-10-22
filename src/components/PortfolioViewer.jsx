import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PortfolioViewer.css';

const PortfolioViewer = () => {
  const { portfolioId } = useParams();
  const navigate = useNavigate();
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [templateStyle, setTemplateStyle] = useState('modern');

  // جلب البيانات من localStorage
  useEffect(() => {
    const loadPortfolioData = () => {
      try {
        const portfolios = JSON.parse(localStorage.getItem('portfolios') || '{}');
        const data = portfolios[portfolioId];
        
        if (data) {
          setPortfolioData(data);
          setTemplateStyle(data.template || 'modern');
        } else {
          // لو مفيش بيانات، نروح لصفحة الخطأ
          navigate('/portfolio-not-found');
        }
      } catch (error) {
        console.error('Error loading portfolio:', error);
        navigate('/error');
      } finally {
        setLoading(false);
      }
    };

    loadPortfolioData();
  }, [portfolioId, navigate]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading portfolio...</p>
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="error-container">
        <h2>Portfolio Not Found</h2>
        <p>The portfolio you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  const handlePayment = () => {
    navigate(`/payment/${portfolioId}`);
  };

  return (
    <div className={`portfolio-viewer ${templateStyle}`}>
      {/* Header */}
      <header className="portfolio-header">
        <div className="container">
          <div className="header-content">
            <div className="personal-info">
              <h1 className="name">{portfolioData.name}</h1>
              <h2 className="role">{portfolioData.role}</h2>
              {portfolioData.bio && <p className="bio">{portfolioData.bio}</p>}
            </div>
            <div className="contact-badge">
              {portfolioData.email && <p>📧 {portfolioData.email}</p>}
              {portfolioData.phone && <p>📞 {portfolioData.phone}</p>}
              <div className="template-badge">
                Template: {portfolioData.templateName || 'Modern Clean'}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Payment Banner */}
      <div className="payment-banner">
        <div className="container">
          <div className="banner-content">
            <span className="lock-icon">🔒</span>
            <span>
              {portfolioData.language === 'arabic' 
                ? 'هذا البورتفوليو مقفل. ادفع لفتح التعديل والتحميل.' 
                : 'This portfolio is locked. Pay to unlock editing and download.'
              }
            </span>
            <button onClick={handlePayment} className="unlock-btn">
              {portfolioData.language === 'arabic' ? 'افتح الآن' : 'Unlock Now'} - {portfolioData.templatePrice}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="portfolio-content">
        <div className="container">
          {/* Projects Section */}
          {portfolioData.projects && (
            <section className="section projects-section">
              <h3 className="section-title">
                {portfolioData.language === 'arabic' ? '🚀 المشاريع' : '🚀 Projects'}
              </h3>
              <div className="section-content">
                {portfolioData.projects.split('\n').map((line, index) => (
                  <div key={index} className={line.includes('•') || line.includes('-') ? 'project-detail' : 'project-title'}>
                    {line}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills Section */}
          {portfolioData.skills && (
            <section className="section skills-section">
              <h3 className="section-title">
                {portfolioData.language === 'arabic' ? '💻 المهارات' : '💻 Skills'}
              </h3>
              <div className="skills-grid">
                {portfolioData.skills.split(/[,،]/).map((skill, index) => (
                  <span key={index} className="skill-tag">{skill.trim()}</span>
                ))}
              </div>
            </section>
          )}

          {/* Experience Section */}
          {portfolioData.experience && (
            <section className="section experience-section">
              <h3 className="section-title">
                {portfolioData.language === 'arabic' ? '💼 الخبرات' : '💼 Experience'}
              </h3>
              <div className="section-content">
                {portfolioData.experience.split('\n').map((line, index) => (
                  <div key={index} className={line.includes('•') || line.includes('-') ? 'exp-detail' : 'exp-role'}>
                    {line}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education Section */}
          {portfolioData.education && (
            <section className="section education-section">
              <h3 className="section-title">
                {portfolioData.language === 'arabic' ? '🎓 التعليم' : '🎓 Education'}
              </h3>
              <div className="section-content">
                {portfolioData.education.split('\n').map((line, index) => (
                  <div key={index} className={line.includes('•') || line.includes('-') ? 'edu-detail' : 'edu-title'}>
                    {line}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="container">
          <div className="footer-content">
            <p className="powered-by">
              {portfolioData.language === 'arabic' 
                ? 'مشغل بواسطة Portfolio Maker' 
                : 'Powered by Portfolio Maker'
              }
            </p>
            <p className="portfolio-id">ID: {portfolioId}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioViewer;
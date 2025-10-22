import React, { useState } from "react";
import './PortfolioBot.css';

const PortfolioBot = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    bio: "",
    projects: "",
    skills: "",
    experience: "",
    education: ""
  });
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [portfolioCreated, setPortfolioCreated] = useState(false);

  const templates = [
    { 
      id: 1, 
      name: "Modern Clean", 
      price: "$15",
      description: "Clean colors, single page, responsive design",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"]
    },
    { 
      id: 2, 
      name: "Creative", 
      price: "$20",
      description: "Innovative design, large images, perfect for designers",
      thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=300&h=200&fit=crop",
      features: ["Image Gallery", "Animations", "Portfolio Showcase"]
    },
    { 
      id: 3, 
      name: "Professional", 
      price: "$18",
      description: "Classic style, suitable for formal resumes",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      features: ["Professional Layout", "Business Focused", "Trust Building"]
    },
  ];

  const paymentMethods = [
    { id: "visa", name: "Visa", icon: "💳" },
    { id: "mastercard", name: "MasterCard", icon: "💳" },
    { id: "paypal", name: "PayPal", icon: "🔵" },
    { id: "instapay", name: "InstaPay", icon: "⚡" }
  ];

  const handleChange = (e) => { 
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    }); 
  };

  const handleTemplateSelect = (template) => { 
    setSelectedTemplate(template);
    setStep(4); 
  };

  const handleCreatePortfolio = () => {
    // محاكاة إنشاء البورتفوليو
    setTimeout(() => {
      setPortfolioCreated(true);
    }, 1000);
  };

  const handlePaymentClick = () => {
    setShowPaymentForm(true);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (cardNumber.length >= 16) {
      setPaymentSuccess(true);
      setShowPaymentForm(false);
      handleCreatePortfolio();
    } else {
      alert("Please enter a valid card number (16 digits)");
    }
  };

  const handleDownload = () => {
    alert("🎉 Portfolio downloaded successfully!");
  };

  const isStep1Valid = () => {
    return formData.name && formData.email && formData.phone && formData.role;
  };

  const isStep2Valid = () => {
    return formData.projects && formData.skills;
  };

  return (
    <div className="portfolio-bot">
      {/* Step 1: Welcome */}
      {step === 1 && (
        <div className="step-container welcome-step">
          <div className="welcome-header">
            <div className="robot-avatar">🤖</div>
            <h1>Welcome to Portfolio Maker!</h1>
          </div>
          <p className="welcome-text">
            I'll help you create a stunning professional portfolio in just a few minutes. 
            Let's get started!
          </p>
          <button onClick={() => setStep(2)} className="next-btn start-btn">
            Start Creating My Portfolio →
          </button>
        </div>
      )}

      {/* Step 2: Basic Information */}
      {step === 2 && (
        <div className="step-container">
          <h2>Step 1: Your Basic Information</h2>
          <p className="step-description">Let's start with your basic details</p>
          
          <div className="form-group">
            <div className="input-row">
              <div className="input-group">
                <label>Full Name *</label>
                <input 
                  name="name" 
                  placeholder="John Doe" 
                  onChange={handleChange}
                  className="form-input"
                  value={formData.name}
                  required
                />
              </div>
              <div className="input-group">
                <label>Email *</label>
                <input 
                  name="email" 
                  placeholder="john@example.com" 
                  onChange={handleChange}
                  className="form-input"
                  value={formData.email}
                  type="email"
                  required
                />
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>Phone *</label>
                <input 
                  name="phone" 
                  placeholder="+1 234 567 8900" 
                  onChange={handleChange}
                  className="form-input"
                  value={formData.phone}
                  required
                />
              </div>
              <div className="input-group">
                <label>Current Role *</label>
                <input 
                  name="role" 
                  placeholder="Software Developer" 
                  onChange={handleChange}
                  className="form-input"
                  value={formData.role}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Professional Bio</label>
              <textarea 
                name="bio" 
                placeholder="Brief description about yourself and your professional background..." 
                onChange={handleChange}
                className="form-textarea"
                rows="3"
                value={formData.bio}
              />
            </div>
          </div>

          <div className="buttons-group">
            <button onClick={() => setStep(1)} className="back-btn">
              ← Back
            </button>
            <button 
              onClick={() => setStep(3)} 
              className={`next-btn ${!isStep1Valid() ? 'disabled-btn' : ''}`}
              disabled={!isStep1Valid()}
            >
              Continue to Projects →
            </button>
          </div>
          {!isStep1Valid() && (
            <p className="required-message">Please fill all required fields (*) to continue</p>
          )}
        </div>
      )}

      {/* Step 3: Projects & Skills */}
      {step === 3 && (
        <div className="step-container">
          <h2>Step 2: Your Projects & Skills</h2>
          <p className="step-description">Showcase your work and expertise</p>
          
          <div className="form-group">
            <div className="input-group">
              <label>Your Projects *</label>
              <textarea 
                name="projects" 
                placeholder="Project 1: E-commerce Website - Built with React, Node.js, MongoDB...
Project 2: Mobile App - Developed with Flutter, Firebase...
(Include project title, description, and technologies used)" 
                onChange={handleChange}
                className="form-textarea"
                rows="4"
                value={formData.projects}
                required
              />
            </div>
            
            <div className="input-group">
              <label>Skills & Technologies *</label>
              <input 
                name="skills" 
                placeholder="JavaScript, React, Node.js, Python, UI/UX Design, Project Management..." 
                onChange={handleChange}
                className="form-input"
                value={formData.skills}
                required
              />
            </div>

            <div className="input-group">
              <label>Work Experience</label>
              <textarea 
                name="experience" 
                placeholder="Senior Developer at Tech Company (2020-2023)
- Led development team
- Improved application performance by 40%

Junior Developer at Startup (2018-2020)
- Developed new features
- Collaborated with design team" 
                onChange={handleChange}
                className="form-textarea"
                rows="3"
                value={formData.experience}
              />
            </div>

            <div className="input-group">
              <label>Education</label>
              <textarea 
                name="education" 
                placeholder="Bachelor of Computer Science - University Name (2014-2018)
Certifications: AWS Certified, React Professional Certificate" 
                onChange={handleChange}
                className="form-textarea"
                rows="2"
                value={formData.education}
              />
            </div>
          </div>

          <div className="buttons-group">
            <button onClick={() => setStep(2)} className="back-btn">
              ← Back
            </button>
            <button 
              onClick={() => setStep(4)} 
              className={`next-btn ${!isStep2Valid() ? 'disabled-btn' : ''}`}
              disabled={!isStep2Valid()}
            >
              Choose Template →
            </button>
          </div>
          {!isStep2Valid() && (
            <p className="required-message">Please fill all required fields (*) to continue</p>
          )}
        </div>
      )}

      {/* Step 4: Template Selection */}
      {step === 4 && (
        <div className="step-container">
          <h2>Step 3: Choose Your Template</h2>
          <p className="step-description">Select the perfect design for your portfolio</p>
          
          <div className="templates-grid">
            {templates.map((template) => (
              <div 
                key={template.id} 
                className={`template-card ${selectedTemplate?.id === template.id ? 'selected' : ''}`}
                onClick={() => handleTemplateSelect(template)}
              >
                <div className="template-image">
                  <img src={template.thumbnail} alt={template.name} />
                  <div className="template-badge">{template.price}</div>
                </div>
                <div className="template-info">
                  <h3>{template.name}</h3>
                  <p>{template.description}</p>
                  <div className="template-features">
                    {template.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="buttons-group">
            <button onClick={() => setStep(3)} className="back-btn">
              ← Back
            </button>
            {selectedTemplate && (
              <button onClick={() => setStep(5)} className="next-btn create-btn">
                Preview My Portfolio 🚀
              </button>
            )}
          </div>
        </div>
      )}

      {/* Step 5: Preview */}
      {step === 5 && selectedTemplate && (
        <div className="step-container">
          <h2>Portfolio Preview - {selectedTemplate.name}</h2>
          <p className="step-description">Your amazing portfolio is ready!</p>
          
          <div className="portfolio-preview">
            <div className="preview-header">
              <h1>{formData.name || "Your Name Here"}</h1>
              <h3>{formData.role || "Your Position"}</h3>
              {formData.bio && <p className="preview-bio">{formData.bio}</p>}
            </div>
            
            <div className="preview-section">
              <h4>📁 Projects</h4>
              <p>{formData.projects || "Your projects will appear here..."}</p>
            </div>
            
            <div className="preview-section">
              <h4>🛠️ Skills</h4>
              <p>{formData.skills || "Your skills"}</p>
            </div>

            {formData.experience && (
              <div className="preview-section">
                <h4>💼 Experience</h4>
                <p>{formData.experience}</p>
              </div>
            )}

            {formData.education && (
              <div className="preview-section">
                <h4>🎓 Education</h4>
                <p>{formData.education}</p>
              </div>
            )}
            
            <div className="preview-contact">
              <p>📧 {formData.email || "Email Address"}</p>
              <p>📞 {formData.phone || "Phone Number"}</p>
            </div>
          </div>

          <div className="preview-actions">
            <button 
              disabled={!paymentSuccess} 
              className={paymentSuccess ? "unlocked-btn" : "locked-btn"}
              onClick={paymentSuccess ? handleDownload : undefined}
            >
              {paymentSuccess ? "📥 Download PDF" : "🔒 Download PDF (Locked)"}
            </button>
            <button disabled={!paymentSuccess} className={paymentSuccess ? "unlocked-btn" : "locked-btn"}>
              {paymentSuccess ? "✏️ Edit Portfolio" : "🔒 Edit Portfolio (Locked)"}
            </button>
            <button 
              onClick={handlePaymentClick} 
              className="payment-btn"
              disabled={paymentSuccess}
            >
              {paymentSuccess ? "✅ Payment Completed" : `💳 Pay ${selectedTemplate.price} → Unlock`}
            </button>
          </div>

          {paymentSuccess && portfolioCreated && (
            <div className="success-message">
              <h3>✅ Payment Successful! Your portfolio is now unlocked</h3>
              <p>You can now download and edit your portfolio</p>
            </div>
          )}

          <button onClick={() => setStep(4)} className="back-btn">
            ← Choose Different Template
          </button>
        </div>
      )}

      {/* Payment Form Modal */}
      {showPaymentForm && (
        <div className="payment-modal">
          <div className="payment-modal-content">
            <h2>Payment Method</h2>
            <p className="payment-amount">Amount: {selectedTemplate?.price}</p>
            
            <form onSubmit={handlePaymentSubmit}>
              <div className="payment-methods">
                <h4>Select Payment Method:</h4>
                {paymentMethods.map(method => (
                  <div 
                    key={method.id}
                    className={`payment-method-card ${paymentMethod === method.id ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod(method.id)}
                  >
                    <span className="method-icon">{method.icon}</span>
                    <span className="method-name">{method.name}</span>
                  </div>
                ))}
              </div>

              {paymentMethod && (
                <div className="card-details">
                  <h4>Card Details:</h4>
                  <input
                    type="text"
                    placeholder="Card Number (16 digits)"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
                    className="form-input"
                    maxLength="16"
                    required
                  />
                  <div className="card-inputs-row">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="form-input"
                      required
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="form-input"
                      maxLength="3"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    className="form-input"
                    required
                  />
                </div>
              )}

              <div className="payment-buttons">
                <button 
                  type="button" 
                  className="back-btn"
                  onClick={() => setShowPaymentForm(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="pay-now-btn"
                  disabled={!paymentMethod || cardNumber.length < 16}
                >
                  Pay Now {selectedTemplate?.price}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioBot;
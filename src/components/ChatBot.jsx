import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [conversationStep, setConversationStep] = useState('welcome');
  const [userData, setUserData] = useState({
    name: '',
    role: '',
    bio: '',
    projects: '',
    skills: '',
    experience: '',
    education: '',
    email: '',
    phone: ''
  });
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [language, setLanguage] = useState('english'); // 'english' or 'arabic'
  const [conversationCompleted, setConversationCompleted] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // الترجمات
  const translations = {
    english: {
      welcome: "👋 Welcome! I'm your Portfolio Assistant.\n\nLet me help you create an amazing professional portfolio.\n\nFirst, choose your language:",
      chooseLanguage: "🌍 Choose your language:",
      arabic: "العربية",
      english: "English",
      whatsYourName: "What's your full name?",
      niceToMeetYou: "Nice to meet you, {name}! 😊\n\nWhat's your current role or position?",
      greatRole: "Great! {role} is an important role. 💼\n\nCan you tell me about your professional background?",
      thanksForBio: "Thanks for sharing! 📝\n\nNow, tell me about your projects:",
      awesomeProjects: "Awesome projects! 🚀\n\nWhat are your main skills and technologies?",
      greatSkills: "Great skillset! 🛠️\n\nWhat about your work experience?",
      impressiveExp: "Impressive experience! 💼\n\nWhat's your educational background?",
      excellentEdu: "Excellent! 🎓\n\nHow can people contact you? (Email & phone)",
      perfect: "🎉 Perfect! I've collected all your information.",
      chooseTemplate: "🎨 **Choose Your Template:**\n\n1. **Modern Clean** ($15)\n2. **Creative Pro** ($20)\n3. **Professional** ($18)\n\nType 1, 2, or 3:",
      templateSelected: "Excellent choice! {template} is a great template. 🎉",
      portfolioReady: "🌐 **Your Portfolio is Ready!**\n\nVisit: {link}\n\nClick the link to preview and pay to unlock editing & download.",
      paymentNote: "💳 **Payment Required:**\nYou need to pay {price} to unlock editing and PDF download."
    },
    arabic: {
      welcome: "👋 أهلاً وسهلاً! أنا مساعدك لإنشاء بورتفوليو.\n\nسأساعدك في إنشاء بورتفوليو احترافي مذهل.\n\nأولاً، اختر لغتك:",
      chooseLanguage: "🌍 اختر لغتك:",
      arabic: "العربية",
      english: "English",
      whatsYourName: "ما هو اسمك الكامل؟",
      niceToMeetYou: "تشرفنا يا {name}! 😊\n\nما هو منصبك الحالي؟",
      greatRole: "ممتاز! {role} منصب مهم. 💼\n\nهل يمكنك إخباري عن خلفيتك المهنية؟",
      thanksForBio: "شكراً للمشاركة! 📝\n\nالآن، أخبرني عن مشاريعك:",
      awesomeProjects: "مشاريع رائعة! 🚀\n\nما هي مهاراتك والتقنيات التي تعمل بها؟",
      greatSkills: "مجموعة مهارات ممتازة! 🛠️\n\nماذا عن خبرتك العملية؟",
      impressiveExp: "خبرة مذهلة! 💼\n\nما هي خلفيتك التعليمية؟",
      excellentEdu: "ممتاز! 🎓\n\nكيف يمكن للآخرين التواصل معك؟ (البريد الإلكتروني والهاتف)",
      perfect: "🎉 ممتاز! لقد جمعت جميع معلوماتك.",
      chooseTemplate: "🎨 **اختر التصميم المناسب:**\n\n1. **Modern Clean** ($15)\n2. **Creative Pro** ($20)\n3. **Professional** ($18)\n\nاكتب 1، 2، أو 3:",
      templateSelected: "اختيار ممتاز! {template} تصميم رائع. 🎉",
      portfolioReady: "🌐 **بورتفوليوك جاهز!**\n\nزور الرابط: {link}\n\nاضغط على الرابط لمعاينة البورتفوليو وادفع لفتح التعديل والتحميل.",
      paymentNote: "💳 **الدفع مطلوب:**\nتحتاج لدفع {price} لفتح التعديل والتحميل."
    }
  };

  const t = translations[language];

  // البوت بيبدأ المحادثة أول ما يفتح
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: 1,
        text: t.welcome,
        sender: 'bot'
      }]);
      setConversationStep('language');
    }
  }, [isOpen, messages.length, t.welcome]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // إضافة رسالة المستخدم
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    
    // معالجة الرد
    handleUserResponse(inputMessage);
    
    setInputMessage('');
  };

  const handleUserResponse = (userInput) => {
    if (conversationCompleted) return; // وقف المحادثة إذا اكتملت

    switch (conversationStep) {
      case 'language':
        if (userInput.toLowerCase().includes('arabic') || userInput.includes('عربي')) {
          setLanguage('arabic');
          setTimeout(() => {
            setMessages(prev => [...prev, {
              id: prev.length + 1,
              text: t.whatsYourName,
              sender: 'bot'
            }]);
            setConversationStep('name');
          }, 1000);
        } else {
          setLanguage('english');
          setTimeout(() => {
            setMessages(prev => [...prev, {
              id: prev.length + 1,
              text: t.whatsYourName,
              sender: 'bot'
            }]);
            setConversationStep('name');
          }, 1000);
        }
        break;

      case 'name':
        setUserData(prev => ({ ...prev, name: userInput }));
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: prev.length + 1,
            text: t.niceToMeetYou.replace('{name}', userInput),
            sender: 'bot'
          }]);
          setConversationStep('role');
        }, 1000);
        break;

      case 'role':
        setUserData(prev => ({ ...prev, role: userInput }));
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: prev.length + 1,
            text: t.greatRole.replace('{role}', userInput),
            sender: 'bot'
          }]);
          setConversationStep('bio');
        }, 1000);
        break;

      case 'bio':
        setUserData(prev => ({ ...prev, bio: userInput }));
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: prev.length + 1,
            text: t.thanksForBio,
            sender: 'bot'
          }]);
          setConversationStep('projects');
        }, 1000);
        break;

      case 'projects':
        setUserData(prev => ({ ...prev, projects: userInput }));
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: prev.length + 1,
            text: t.awesomeProjects,
            sender: 'bot'
          }]);
          setConversationStep('skills');
        }, 1000);
        break;

      case 'skills':
        setUserData(prev => ({ ...prev, skills: userInput }));
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: prev.length + 1,
            text: t.greatSkills,
            sender: 'bot'
          }]);
          setConversationStep('experience');
        }, 1000);
        break;

      case 'experience':
        setUserData(prev => ({ ...prev, experience: userInput }));
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: prev.length + 1,
            text: t.impressiveExp,
            sender: 'bot'
          }]);
          setConversationStep('education');
        }, 1000);
        break;

      case 'education':
        setUserData(prev => ({ ...prev, education: userInput }));
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: prev.length + 1,
            text: t.excellentEdu,
            sender: 'bot'
          }]);
          setConversationStep('contact');
        }, 1000);
        break;

      case 'contact':
        // استخراج الإيميل والهاتف
        const emailMatch = userInput.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
        const phoneMatch = userInput.match(/\b\d{10,}\b/);
        
        if (emailMatch) setUserData(prev => ({ ...prev, email: emailMatch[0] }));
        if (phoneMatch) setUserData(prev => ({ ...prev, phone: phoneMatch[0] }));

        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: prev.length + 1,
            text: t.perfect + "\n\n" + t.chooseTemplate,
            sender: 'bot'
          }]);
          setConversationStep('template_selection');
        }, 1000);
        break;

      case 'template_selection':
        const templates = {
          '1': { name: 'Modern Clean', price: '$15' },
          '2': { name: 'Creative Pro', price: '$20' },
          '3': { name: 'Professional', price: '$18' }
        };

        const selected = templates[userInput.trim()];
        
        if (selected) {
          setSelectedTemplate(selected);
          setMessages(prev => [...prev, {
            id: prev.length + 1,
            text: t.templateSelected.replace('{template}', selected.name),
            sender: 'bot'
          }]);

          // توليد اللينك النهائي
          setTimeout(() => {
            const portfolioLink = `http://localhost:3000/portfolio/${userData.name.toLowerCase().replace(/\s+/g, '-')}`;
            setMessages(prev => [...prev, {
              id: prev.length + 1,
              text: t.portfolioReady.replace('{link}', portfolioLink) + "\n\n" + t.paymentNote.replace('{price}', selected.price),
              sender: 'bot'
            }]);
            
            // إيقاف المحادثة
            setConversationCompleted(true);
          }, 1500);
        } else {
          setMessages(prev => [...prev, {
            id: prev.length + 1,
            text: "Please type 1, 2, or 3 to choose a template.",
            sender: 'bot'
          }]);
        }
        break;

      default:
        // إذا المحادثة اكتملت، البوت مبيردش تاني
        if (!conversationCompleted) {
          setTimeout(() => {
            setMessages(prev => [...prev, {
              id: prev.length + 1,
              text: language === 'arabic' ? 
                "أنا هنا لمساعدتك في إنشاء بورتفوليو. هل تريد بدء محادثة جديدة؟" :
                "I'm here to help you create a portfolio. Would you like to start a new conversation?",
              sender: 'bot'
            }]);
          }, 1000);
        }
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Icon */}
      <div className={`chat-icon ${isOpen ? 'hidden' : ''}`} onClick={toggleChat}>
        <div className="robot-icon">🤖</div>
        <span className="notification-dot"></span>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="header-left">
              <div className="bot-avatar">🤖</div>
              <div>
                <h3>Portfolio Assistant</h3>
                <span className="status">
                  {language === 'arabic' ? 'متصل' : 'Online'} • 
                  {conversationCompleted ? (language === 'arabic' ? ' مكتمل' : ' Completed') : (language === 'arabic' ? ' يجمع البيانات' : ' Collecting Data')}
                </span>
              </div>
            </div>
            <button className="close-btn" onClick={toggleChat}>×</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                {message.sender === 'bot' && <div className="bot-avatar-small">🤖</div>}
                <div className="message-bubble">
                  {message.text.split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {!conversationCompleted ? (
            <form onSubmit={handleSendMessage} className="chatbot-input-form">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={
                  conversationStep === 'language' ? (language === 'arabic' ? "اكتب 'عربي' أو 'English'" : "Type 'Arabic' or 'English'") :
                  conversationStep === 'name' ? t.whatsYourName :
                  conversationStep === 'role' ? (language === 'arabic' ? "المسمى الوظيفي..." : "Your role...") :
                  conversationStep === 'bio' ? (language === 'arabic' ? "خلفيتك المهنية..." : "Your bio...") :
                  conversationStep === 'projects' ? (language === 'arabic' ? "مشاريعك..." : "Your projects...") :
                  conversationStep === 'skills' ? (language === 'arabic' ? "مهاراتك..." : "Your skills...") :
                  conversationStep === 'experience' ? (language === 'arabic' ? "خبراتك..." : "Your experience...") :
                  conversationStep === 'education' ? (language === 'arabic' ? "تعليمك..." : "Your education...") :
                  conversationStep === 'contact' ? (language === 'arabic' ? "ايميلك وهاتفك..." : "Your email & phone...") :
                  conversationStep === 'template_selection' ? (language === 'arabic' ? "اكتب 1، 2، أو 3" : "Type 1, 2, or 3") :
                  (language === 'arabic' ? "اكتب رسالتك..." : "Type your message...")
                }
                className="chatbot-input"
              />

              <button 
                type="submit" 
                className="send-button"
                disabled={!inputMessage.trim()}
              >
                ➤
              </button>
            </form>
          ) : (
            <div className="conversation-completed">
              <button 
                onClick={() => {
                  setConversationCompleted(false);
                  setConversationStep('welcome');
                  setMessages([]);
                  setUserData({
                    name: '', role: '', bio: '', projects: '', 
                    skills: '', experience: '', education: '', email: '', phone: ''
                  });
                  setSelectedTemplate(null);
                }}
                className="new-conversation-btn"
              >
                {language === 'arabic' ? 'بدء محادثة جديدة' : 'Start New Conversation'}
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;
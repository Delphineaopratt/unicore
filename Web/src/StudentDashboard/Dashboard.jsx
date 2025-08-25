import React, { useState, useEffect } from 'react';
import StudentSidebar from '../components/Studentsidebar';
import './Dashboard.css'

const slides = [
  {
    id: 1,
    title: 'Unlock Your Career Potential',
    description:
      'Access a curated list of student-friendly jobs and internships. Filter by industry, location, and role type to find the perfect fit for your career aspirations.',
    image: '/images/careerpotential.jpg',
  },
  {
    id: 2,
    title: 'Find Your dream Job Easily',
    description:
      'Get daily tips to improve your productivity, learning, networking, and more.',
    image: '/images/dreamjob.jpg',
  },
  {
    id: 3,
    title: 'Get a Hostel Without a Sweat',
    description:
      'Unicore provides easy access to hostels near your school, and you dont even have to step out!.',
    image: '/images/findhostel.jpg',
  },
  {
    id: 4,
    title: 'Allow Unibot Help With Your CV',
    description: 'Unibot helps you to tailor your resume to each job application to make a strong first impression.',
    image: '/images/unibotCV.jpg',
  },
];

const dailyTips = [
  {
    id: 1,
    title: 'Daily Career Advice',
    description: 'Learn how to tailor your cover letter to make job applications stand out and leave a strong first impression.',
    image: '/public/images/feature1.png',
  },
  {
    id: 2,
   title: 'Networking',
   description: 'Connect with peers, professors, and professionals to broaden your opportunities.',
  },
];

const educationalQuotes = [
  {
    id: 1,
    quote: '"The beautiful thing about learning is that no one can take it away from you."',
    author: '- B.B. King',
    icon: '🎓',
  },
  {
    id: 2,
    quote: '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
    author: '- Winston Churchill',
    icon: '🌅',
  },
  {
    id: 3,
    quote: '"The best way to predict the future is to create it."',
    author: '- Peter Drucker',
    icon: '📘',
  },
  {
    id: 4,
    quote: '"Education is the most powerful weapon which you can use to change the world."',
    author: '- Nelson Mandela',
    icon: '🌍',
  },
];

function Dashboard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTip, setCurrentTip] = useState(() => {
    const savedTip = localStorage.getItem('currentTip');
    return savedTip ? parseInt(savedTip, 10) : 0;
  });
  const [educationalQuotes, setEducationalQuotes] = useState([
    {
      id: 1,
      quote: '"The beautiful thing about learning is that no one can take it away from you."',
      author: '- B.B. King',
      icon: '🎓',
    },
    {
      id: 2,
      quote: '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
      author: '- Winston Churchill',
      icon: '🌅',
    },
    {
      id: 3,
      quote: '"The best way to predict the future is to create it."',
      author: '- Peter Drucker',
      icon: '📘',
    },
    {
      id: 4,
      quote: '"Education is the most powerful weapon which you can use to change the world."',
      author: '- Nelson Mandela',
      icon: '🌍',
    },
  ]);
  const [currentQuote, setCurrentQuote] = useState(() => {
    const savedQuote = localStorage.getItem('currentQuote');
    return savedQuote ? parseInt(savedQuote, 10) : 0;
  });

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    // Check if 24 hours have passed since the last update
    const lastTipUpdate = localStorage.getItem('lastTipUpdate');
    const lastQuoteUpdate = localStorage.getItem('lastQuoteUpdate');
    const now = new Date().getTime();

    if (!lastTipUpdate || (now - lastTipUpdate) >= 24 * 60 * 60 * 1000) {
      setCurrentTip((prev) => (prev + 1) % dailyTips.length);
      localStorage.setItem('currentTip', (currentTip + 1) % dailyTips.length);
      localStorage.setItem('lastTipUpdate', now);
    }

    if (!lastQuoteUpdate || (now - lastQuoteUpdate) >= 24 * 60 * 60 * 1000) {
      setCurrentQuote((prev) => (prev + 1) % educationalQuotes.length);
      localStorage.setItem('currentQuote', (currentQuote + 1) % educationalQuotes.length);
      localStorage.setItem('lastQuoteUpdate', now);
    }

    // Fetch quotes from the internet
    const fetchQuotes = async () => {
      try {
        const response = await fetch('https://api.quotable.io/quotes?tags=education'); // Example API
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const newQuotes = data.results.map((q, index) => ({
            id: index + 5, // Avoid ID conflicts
            quote: q.content,
            author: `- ${q.author}`,
            icon: ['🎓', '🌅', '📘', '🌍'][index % 4],
          }));
          setEducationalQuotes((prev) => [...prev, ...newQuotes]);
        }
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchQuotes();

    return () => clearInterval(slideInterval);
  }, [currentTip, currentQuote]);





  return (
    <StudentSidebar>
    <div className="dashboard-container">
        {/* Slideshow */}
        <section className="slideshow-section"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="slide">
            <div className="slide-text">
              <h2>{slides[currentSlide].title}</h2>
              <p>{slides[currentSlide].description}</p>
            </div>
          </div>
          <div className="slide-dots">
            {slides.map((slide, index) => (
              <span
                key={slide.id}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </section>

        {/* Daily Advice and Quotes */}
        <section className="daily-advice-section">
          <div className="advice-cards">
            <div className="advice-card">
              <h2>Daily Career Advice</h2>
              <div className="advice-text">
                <h4>{dailyTips[currentTip].title}</h4>
                <p>{dailyTips[currentTip].description}</p>
              </div>
            </div>
            <div className="quote-card">
              <div className="quote-text">
                <h2>Daily Educational Quote</h2>
                <blockquote>{educationalQuotes[currentQuote].quote}</blockquote>
                <cite>{educationalQuotes[currentQuote].author}</cite>
              </div>
            </div>
          </div>
        </section>
       
    {/* inspirations */}
        <section className="inspiration-section">
          <h3>Inspiration for Your Journey</h3>
          <div className="inspiration-cards">
            {educationalQuotes.map((item) => (
              <div key={item.id} className="inspiration-card">
                <div className="inspiration-icon">{item.icon}</div>
                <blockquote>{item.quote}</blockquote>
                <cite>{item.author}</cite>
              </div>
            ))}
          </div>
        </section>
      </div>
    </StudentSidebar>
  );
}

export default Dashboard;

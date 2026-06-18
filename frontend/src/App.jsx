import React, { useState, useEffect } from 'react';
import './App.css';

// SVG Icons as React components for reliable rendering
const DashboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="10" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
);
const ActivityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
);
const CoachIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8M16 4h-4M12 12v10M18 11a6 6 0 0 1-6 6 6 6 0 0 1-6-6"/></svg>
);
const QuestIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);
const SimulatorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h6M9 13h6M9 17h6"/></svg>
);
const CommunityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const AdvocacyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
);
const ReportsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
);
const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
);
const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 2 5.5a7 7 0 0 1-7 7h-3"/><path d="M19 21v-3a3 3 0 0 0-3-3"/></svg>
);
const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
);

// Emission calculations based on standard scientific metrics:
const CALC_MULTIPLIERS = {
  carTravel: 0.18,      // kg CO₂ per km
  publicTransit: 0.04,  // kg CO₂ per km
  electricity: 0.42,    // kg CO₂ per kWh
  acHour: 0.50,         // kg CO₂ per hour of AC (approx 1.2 kW * 0.42 kg CO₂/kWh)
  meatMeal: 2.50,       // kg CO₂ per meat meal
  vegMeal: 0.70,        // kg CO₂ per vegetarian meal
  waste: 0.50           // kg CO₂ per kg waste
};

function App() {
  // Global States
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [loginEmail, setLoginEmail] = useState('abhishek@example.com');
  const [loginPassword, setLoginPassword] = useState('••••••••');
  const [rememberMe, setRememberMe] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [toastMessage, setToastMessage] = useState(null);

  // User Stats
  const [userData, setUserData] = useState({
    name: 'Abhishek',
    email: 'abhishek@example.com',
    points: 1250,
    streak: 5,
    location: 'Chennai'
  });

  // Notification Alerts State
  const [notifications, setNotifications] = useState([
    { id: 1, text: "⚠️ High AC usage alert: Your cooling hours exceeded 8 hours yesterday.", type: 'warning', read: false },
    { id: 2, text: "🔥 Streak Alert: Complete a quest today to maintain your 5-day streak!", type: 'info', read: false },
    { id: 3, text: "🏆 Achievement unlocked: You earned the 'Green Commuter' badge!", type: 'success', read: true }
  ]);
  const [showAlertsDropdown, setShowAlertsDropdown] = useState(false);

  // GPS & Integrations
  const [gpsPermission, setGpsPermission] = useState(false);
  const [syncStatus, setSyncStatus] = useState('synced');
  const [apiConnections, setApiConnections] = useState({
    appleHealth: true,
    tesla: false,
    smartMeter: true
  });

  // User Monthly Activities State
  const [activities, setActivities] = useState({
    carTravel: 120,       // km/month
    publicTransit: 240,   // km/month
    walkingCycling: 65,   // km/month
    electricity: 350,     // kWh/month
    acHours: 8,           // hours/day
    meatMeals: 14,        // meals/week (max 21)
    waste: 40             // kg/month
  });

  // Simulator Inputs
  const [simAcHours, setSimAcHours] = useState(8);
  const [simCarTravel, setSimCarTravel] = useState(120);
  const [simTransit, setSimTransit] = useState(240);
  const [simMeatMeals, setSimMeatMeals] = useState(14);

  // Quests State
  const [quests, setQuests] = useState([
    {
      id: 'transit_tuesday',
      title: 'Transit Tuesday',
      description: 'You drove 120km last month. Take the metro or bus on Tuesday instead!',
      difficulty: 'medium',
      co2Saved: 12,
      points: 50,
      status: 'active'
    },
    {
      id: 'thermostat_tweak',
      title: 'Thermostat Tweak',
      description: 'Your AC runs 8h/day. Lower the thermostat by 1°C or reduce usage by 1 hr/day.',
      difficulty: 'easy',
      co2Saved: 5,
      points: 30,
      status: 'available'
    },
    {
      id: 'meatless_monday',
      title: 'Meatless Monday',
      description: 'Eat 100% plant-based today to cut down dietary agricultural emissions.',
      difficulty: 'easy',
      co2Saved: 3.5,
      points: 25,
      status: 'completed'
    },
    {
      id: 'waste_warrior',
      title: 'Zero Waste Challenge',
      description: 'Avoid single-use plastics and compost food waste for 3 consecutive days.',
      difficulty: 'hard',
      co2Saved: 8,
      points: 80,
      status: 'available'
    }
  ]);

  // AI Chatbot State
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', text: 'Hello Abhishek! I am your AI Sustainability Coach. Looking at your Chennai profile, your biggest carbon emitters are electricity usage (AC) and your diet (14 meat meals/week). How can I guide you today?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isAiTyping, setIsAiTyping] = useState(false);

  // Advocacy Email Template Selection
  const [selectedAdvocacy, setSelectedAdvocacy] = useState('landlord');
  const [emailSenderName, setEmailSenderName] = useState('Abhishek');
  const [emailCopied, setEmailCopied] = useState(false);

  // Sync Simulator states when activities change
  useEffect(() => {
    setSimAcHours(activities.acHours);
    setSimCarTravel(activities.carTravel);
    setSimTransit(activities.publicTransit);
    setSimMeatMeals(activities.meatMeals);
  }, [activities]);

  // On Mount: Try fetching data from Node Express backend if it is running
  useEffect(() => {
    const fetchBackendData = async () => {
      try {
        const telemetryRes = await fetch('http://localhost:5000/api/telemetry');
        if (telemetryRes.ok) {
          const telemetryData = await telemetryRes.json();
          setActivities(telemetryData);
        }
        
        const questsRes = await fetch('http://localhost:5000/api/quests');
        if (questsRes.ok) {
          const questsData = await questsRes.json();
          setQuests(questsData);
        }

        const notifyRes = await fetch('http://localhost:5000/api/notifications');
        if (notifyRes.ok) {
          const notifyData = await notifyRes.json();
          setNotifications(notifyData);
        }
        console.log("Successfully fetched initial data from Express backend!");
      } catch (err) {
        console.log("Express backend is down or offline. Running in standalone client mode.", err);
      }
    };
    fetchBackendData();
  }, []);

  // Toast notification helper
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Helper: Calculate footprint categories & total
  const getCarbonBreakdown = (data) => {
    const transport = (data.carTravel * CALC_MULTIPLIERS.carTravel) + (data.publicTransit * CALC_MULTIPLIERS.publicTransit);
    const electricity = (data.electricity * CALC_MULTIPLIERS.electricity) + (data.acHours * 30 * CALC_MULTIPLIERS.acHour);
    
    // Diet: 21 meals a week total
    const meatMealsWeekly = data.meatMeals;
    const vegMealsWeekly = 21 - meatMealsWeekly;
    const food = ((meatMealsWeekly * CALC_MULTIPLIERS.meatMeal) + (vegMealsWeekly * CALC_MULTIPLIERS.vegMeal)) * 4.3;
    
    const waste = data.waste * CALC_MULTIPLIERS.waste;
    
    const total = transport + electricity + food + waste;
    
    return {
      transport: Math.round(transport),
      electricity: Math.round(electricity),
      food: Math.round(food),
      waste: Math.round(waste),
      total: Math.round(total)
    };
  };

  // Current Month Footprint
  const breakdown = getCarbonBreakdown(activities);
  
  // Calculate Score (Simple inverted normalized scale, 100 is best, 0 is worst)
  const calculateScore = (totalCO2) => {
    return Math.max(10, Math.min(99, Math.round(100 - (totalCO2 / 10))));
  };
  const carbonScore = calculateScore(breakdown.total);

  // Simulator Breakdown
  const simBreakdown = getCarbonBreakdown({
    ...activities,
    acHours: simAcHours,
    carTravel: simCarTravel,
    publicTransit: simTransit,
    meatMeals: simMeatMeals
  });

  // Handle Sync Activity simulation
  const handleSyncData = () => {
    setSyncStatus('syncing');
    setTimeout(() => {
      setSyncStatus('synced');
      setActivities(prev => ({
        ...prev,
        walkingCycling: prev.walkingCycling + 3,
        carTravel: prev.carTravel + 5,
        publicTransit: prev.publicTransit + 8,
        electricity: prev.electricity + 12
      }));
      setNotifications(prev => [
        { id: Date.now(), text: "🔄 Data Synced: 12 kWh and 5 km car travel imported.", type: 'info', read: false },
        ...prev
      ]);
      triggerToast("Synced fresh data from Apple Health, Smart Meter & GPS tracker!");
    }, 1200);
  };

  // Chatbot Auto Response Generator
  const submitChatQuestion = async (text) => {
    if (!text.trim()) return;
    
    const newMessages = [...chatMessages, { sender: 'user', text }];
    setChatMessages(newMessages);
    setChatInput('');
    setIsAiTyping(true);

    try {
      const chatRes = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });
      if (chatRes.ok) {
        const data = await chatRes.json();
        setChatMessages(prev => [...prev, { sender: 'ai', text: data.response }]);
        setIsAiTyping(false);
        return;
      }
    } catch (err) {
      console.log("Express backend is down. Resolving chat via client-side AI mock.", err);
    }

    // Fallback client-side responses
    setTimeout(() => {
      let aiResponse = "";
      const lowerText = text.toLowerCase();

      if (lowerText.includes("why did") && lowerText.includes("increase")) {
        aiResponse = `Your emissions increased due to your vehicle travel changing from 110km to 120km this month. Also, your AC was active for 8 hrs/day during the Chennai summer heat. Reducing AC by just 1 hr/day will save ~15 kg CO₂.`;
      } else if (lowerText.includes("what can i improve") || lowerText.includes("improve this week")) {
        aiResponse = `Based on your Chennai dashboard, here are your top three action points for this week:\n1. Try replacing 3 meat meals with plant-based options to save 5.4 kg CO₂.\n2. Maintain your AC at 26°C instead of 22°C to reduce electrical load.\n3. Accept the 'Transit Tuesday' quest to offset your car emissions.`;
      } else if (lowerText.includes("reduce emissions by 20%") || lowerText.includes("reduce by 20%")) {
        const targetSavings = Math.round(breakdown.total * 0.2);
        aiResponse = `To reduce your carbon footprint by 20% (~${targetSavings} kg CO₂/month), I suggest combining these measures:\n• Travel: Shift 80km of car travel to public transit (saves 11.2 kg CO₂).\n• Home: Decrease AC usage from 8 to 5 hours/day (saves 45 kg CO₂).\n• Diet: Shift from 14 meat meals to 7 per week (saves 54 kg CO₂).\nTotal potential monthly savings: 110 kg CO₂.`;
      } else {
        aiResponse = `Interesting question! In Chennai, shifting to public transit and optimizing air conditioning are key. Have you tried adjusting the values in the Carbon Reduction Simulator tab to test these exact scenarios?`;
      }

      setChatMessages(prev => [...prev, { sender: 'ai', text: aiResponse }]);
      setIsAiTyping(false);
    }, 1000);
  };

  // Quest Actions
  const handleQuestAction = (questId, action) => {
    setQuests(prev => prev.map(q => {
      if (q.id === questId) {
        if (action === 'accept') {
          triggerToast(`Quest "${q.title}" accepted! Let's do this!`);
          return { ...q, status: 'active' };
        } else if (action === 'complete') {
          setUserData(prevUser => ({
            ...prevUser,
            points: prevUser.points + q.points,
            streak: prevUser.streak + 1
          }));
          triggerToast(`Success! You earned +${q.points} points and saved ${q.co2Saved}kg CO₂!`);
          
          if (questId === 'thermostat_tweak') {
            setActivities(prevAct => ({ ...prevAct, acHours: Math.max(1, prevAct.acHours - 1) }));
          } else if (questId === 'transit_tuesday') {
            setActivities(prevAct => ({ 
              ...prevAct, 
              carTravel: Math.max(10, prevAct.carTravel - 15),
              publicTransit: prevAct.publicTransit + 15
            }));
          }

          setNotifications(prev => [
            { id: Date.now(), text: `🏆 Quest Completed: "${q.title}" saved ${q.co2Saved}kg CO₂!`, type: 'success', read: false },
            ...prev
          ]);

          return { ...q, status: 'completed' };
        }
      }
      return q;
    }));
  };

  // PDF Report Simulator
  const handlePdfDownload = () => {
    triggerToast("Generating your Sustainability Report...");
    setTimeout(() => {
      const element = document.createElement("a");
      const file = new Blob([
        `IMPACTSPHERE CARBON ANALYTICS REPORT\n`,
        `===================================\n`,
        `User: ${userData.name}\n`,
        `Location: ${userData.location}\n`,
        `Date: June 2026\n\n`,
        `Month Footprint: ${breakdown.total} kg CO2\n`,
        `Carbon Score: ${carbonScore}/100\n`,
        `Impact Points: ${userData.points}\n`,
        `Daily Streak: ${userData.streak} Days\n\n`,
        `CATEGORY BREAKDOWN:\n`,
        `- Transportation: ${breakdown.transport} kg CO2\n`,
        `- Electricity: ${breakdown.electricity} kg CO2\n`,
        `- Food & Diet: ${breakdown.food} kg CO2\n`,
        `- Waste Management: ${breakdown.waste} kg CO2\n\n`,
        `AI Recommendations Status:\n`,
        `- Target: Reduce AC usage to save up to 45 kg CO2/month.\n`,
        `- Target: Commit to 3 plant-based days weekly.`
      ], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = `ImpactSphere_Report_June_2026.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      triggerToast("Report 'ImpactSphere_Report_June_2026.txt' downloaded successfully!");
    }, 1500);
  };

  // Email Copy Trigger
  const handleEmailAction = (type) => {
    setEmailCopied(true);
    triggerToast(type === 'send' ? "Simulated sending email to representatives!" : "Email template copied to clipboard!");
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const emailDetails = selectedAdvocacy === 'landlord' ? {
    subject: "Request for Energy Efficiency Improvements - Insulation & HVAC",
    body: `Dear Property Manager,

I am writing as a tenant of Apartment 3B. I request an inspection and upgrade of our apartment's building insulation and cooling systems. 

Our automatic carbon tracker indicates higher than average emissions from electricity/AC usage (${breakdown.electricity} kg CO₂/month), which suggests thermal loss and draft issues. Upgrading window sealing and AC compressors would lower billing costs, increase tenant satisfaction, and reduce the property's carbon footprint. 

There are federal and state rebates available in ${userData.location} for energy audits and upgrades. I would be happy to coordinate with any inspection teams.

Best regards,
${emailSenderName}`
  } : {
    subject: "Petition for Improved Cycling Infrastructure in Chennai",
    body: `Dear Local Ward Councilor,

I am writing as a resident of ${userData.location} to request the allocation of budget for dedicated, protected bike lanes along major transit routes.

Automated telemetry data shows that many citizens commute by personal vehicles due to unsafe cycling conditions. Our neighborhood community has a target of saving 10 tons of CO₂. Providing protected lanes will facilitate green commuting, reduce city gridlock, and improve public health.

I urge you to review the urban infrastructure plan and address this issue in the upcoming town council meeting.

Sincerely,
${emailSenderName}`
  };

  const markAllAlertsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    triggerToast("All alerts marked as read.");
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="app-container">
      {/* Toast Alert Banner */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: 'rgba(16, 185, 129, 0.95)',
          color: 'white',
          padding: '1rem 1.5rem',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
          zIndex: 1000,
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: '0.95rem',
          animation: 'slideUp 0.3s ease-out forwards'
        }}>
          <span style={{ fontSize: '1.2rem' }}>🌿</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Condition: Login Screen vs Dashboard Workspace */}
      {!isLoggedIn ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', minHeight: '100vh', padding: '1rem' }}>
          <div className="glass-panel max-w-md w-full animate-fade-in" style={{ padding: '2.5rem' }}>
            <div className="text-center mb-6">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <LeafIcon />
                <h1 style={{ fontSize: '2rem', margin: 0 }} className="text-gradient">ImpactSphere</h1>
              </div>
              <p className="text-secondary-color text-sm">Empowering choices, tracking actual footprints, driving global impact.</p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); triggerToast("Welcome back, Abhishek!"); }} className="flex flex-col gap-2">
              <div className="input-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  className="input-control" 
                  value={loginEmail} 
                  onChange={(e) => setLoginEmail(e.target.value)} 
                  required 
                />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input 
                  type="password" 
                  className="input-control" 
                  value={loginPassword} 
                  onChange={(e) => setLoginPassword(e.target.value)} 
                  required 
                />
              </div>

              <div className="flex justify-between items-center mb-4">
                <label className="checkbox-container">
                  <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                  <span className="checkmark"></span>
                  Remember Me
                </label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); triggerToast("Password reset link sent to your email!"); }} style={{ color: 'var(--accent-secondary)', textDecoration: 'none', fontSize: '0.85rem' }}>Forgot Password?</a>
              </div>

              <button type="submit" className="btn-primary w-full" style={{ padding: '0.9rem' }}>
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
            </form>

            <div className="border-t pt-4 mt-6 text-center">
              <button 
                className="btn-secondary w-full" 
                onClick={() => { triggerToast("Redirecting to Google Auth..."); setTimeout(() => setIsLoggedIn(true), 800); }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 5.04c1.66 0 3.2.57 4.38 1.69l3.27-3.27C17.67 1.47 14.99 1 12 1 7.35 1 3.39 3.65 1.5 7.5l3.87 3C6.3 7.8 8.94 5.04 12 5.04z"/><path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.29 1.48-1.14 2.73-2.4 3.58l3.73 2.88c2.18-2 3.7-4.96 3.7-8.61z"/><path fill="#FBBC05" d="M5.37 14.5c-.24-.72-.37-1.48-.37-2.5s.13-1.78.37-2.5L1.5 6.5C.54 8.5 0 10.75 0 13s.54 4.5 1.5 6.5l3.87-3z"/><path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.73-2.88c-1.1.74-2.5 1.18-4.23 1.18-3.06 0-5.7-2.76-6.63-5.46L1.5 16.5C3.39 20.35 7.35 23 12 23z"/></svg>
                Continue with Google
              </button>
            </div>

            <div className="text-center mt-4 text-sm text-secondary-color">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{' '}
              <a href="#toggle" onClick={(e) => { e.preventDefault(); setIsSignUp(!isSignUp); }} style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 600 }}>
                {isSignUp ? 'Login here' : 'Sign up here'}
              </a>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Sidebar Navigation */}
          <div className="sidebar glass-panel" style={{ margin: '1rem', height: 'calc(100vh - 2rem)', border: '1px solid var(--border-color)', borderRadius: '24px' }}>
            <div className="sidebar-logo">
              <LeafIcon />
              <span className="text-gradient">ImpactSphere</span>
            </div>

            <nav className="flex flex-col" style={{ flex: 1 }}>
              <div className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
                <DashboardIcon /> Dashboard
              </div>
              <div className={`nav-item ${activeTab === 'tracking' ? 'active' : ''}`} onClick={() => setActiveTab('tracking')}>
                <ActivityIcon /> Activity Tracking
              </div>
              <div className={`nav-item ${activeTab === 'coach' ? 'active' : ''}`} onClick={() => setActiveTab('coach')}>
                <CoachIcon /> AI Coach
              </div>
              <div className={`nav-item ${activeTab === 'quests' ? 'active' : ''}`} onClick={() => setActiveTab('quests')}>
                <QuestIcon /> Action Quests
              </div>
              <div className={`nav-item ${activeTab === 'simulator' ? 'active' : ''}`} onClick={() => setActiveTab('simulator')}>
                <SimulatorIcon /> Carbon Simulator
              </div>
              <div className={`nav-item ${activeTab === 'community' ? 'active' : ''}`} onClick={() => setActiveTab('community')}>
                <CommunityIcon /> Community Impact
              </div>
              <div className={`nav-item ${activeTab === 'advocacy' ? 'active' : ''}`} onClick={() => setActiveTab('advocacy')}>
                <AdvocacyIcon /> Advocacy
              </div>
              <div className={`nav-item ${activeTab === 'reports' ? 'active' : ''}`} onClick={() => setActiveTab('reports')}>
                <ReportsIcon /> Reports & Analytics
              </div>
              <div className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
                <SettingsIcon /> Settings
              </div>
            </nav>

            {/* Helpline Panel Widget */}
            <div className="glass-panel" style={{ padding: '0.85rem 1rem', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.15)', borderRadius: '16px', marginBottom: '0.5rem' }}>
              <p className="text-xs text-secondary-color" style={{ marginBottom: '0.15rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <span>📞</span> Eco Helpline Support
              </p>
              <p className="font-bold text-sm" style={{ color: 'var(--accent-primary)', letterSpacing: '0.05em' }}>+1-800-555-2568</p>
              <p className="text-muted-color" style={{ fontSize: '0.7rem', marginTop: '0.15rem' }}>Free audits & green consultations</p>
            </div>

            <div className="border-t pt-4 flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm text-secondary-color">
                <span>Streak:</span>
                <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>🔥 {userData.streak} Days</span>
              </div>
              <div className="flex justify-between items-center text-sm text-secondary-color">
                <span>Green Points:</span>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>⭐ {userData.points}</span>
              </div>
            </div>
          </div>

          {/* Main workspace */}
          <div className="main-content">
            
            {/* Header with Notifications & Helpline */}
            <div className="glass-panel animate-fade-in" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', padding: '1rem 1.5rem', borderRadius: '16px' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Welcome back, {userData.name}!</h2>
                <p className="text-xs text-secondary-color" style={{ margin: 0 }}>Reference Region: {userData.location}</p>
              </div>

              <div className="flex items-center gap-4">
                <a href="tel:+18005552568" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', background: 'rgba(255,255,255,0.04)', padding: '0.5rem 1rem', borderRadius: '10px', border: '1px solid var(--border-color)', color: 'white', transition: 'all 0.2s' }}>
                  <span>📞 Helpline:</span>
                  <strong style={{ color: 'var(--accent-secondary)' }}>+1 (800) 555-2568</strong>
                </a>

                {/* Notification Dropdown Container */}
                <div style={{ position: 'relative' }}>
                  <button 
                    onClick={() => setShowAlertsDropdown(!showAlertsDropdown)} 
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-color)', padding: '0.6rem', borderRadius: '10px', color: 'white', cursor: 'pointer', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <BellIcon />
                    {unreadCount > 0 && (
                      <span style={{ 
                        position: 'absolute', 
                        top: '-5px', 
                        right: '-5px', 
                        background: '#ef4444', 
                        color: 'white', 
                        borderRadius: '50%', 
                        width: '18px', 
                        height: '18px', 
                        fontSize: '10px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        fontWeight: 'bold',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
                      }}>
                        {unreadCount}
                      </span>
                    )}
                  </button>

                  {showAlertsDropdown && (
                    <div className="glass-panel" style={{ 
                      position: 'absolute', 
                      right: 0, 
                      top: '45px', 
                      width: '320px', 
                      zIndex: 100, 
                      padding: '1.25rem',
                      background: 'rgba(15, 23, 42, 0.95)',
                      border: '1px solid var(--border-hover)',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.6)'
                    }}>
                      <div className="flex justify-between items-center mb-3 pb-2 border-b" style={{ borderColor: 'var(--border-color)' }}>
                        <h4 style={{ margin: 0, fontSize: '0.95rem' }}>Notification Alerts</h4>
                        {unreadCount > 0 && (
                          <button onClick={markAllAlertsRead} style={{ background: 'none', border: 'none', color: 'var(--accent-primary)', fontSize: '0.75rem', cursor: 'pointer', fontWeight: 600 }}>Mark all read</button>
                        )}
                      </div>
                      <div className="flex flex-col gap-2" style={{ maxHeight: '240px', overflowY: 'auto' }}>
                        {notifications.length === 0 ? (
                          <p className="text-xs text-secondary-color text-center py-4">No active alerts.</p>
                        ) : (
                          notifications.map(n => (
                            <div 
                              key={n.id} 
                              onClick={() => {
                                setNotifications(prev => prev.map(item => item.id === n.id ? { ...item, read: true } : item));
                              }}
                              style={{ 
                                fontSize: '0.8rem', 
                                padding: '0.65rem', 
                                borderRadius: '8px', 
                                background: n.read ? 'rgba(255,255,255,0.01)' : 'rgba(255,255,255,0.04)', 
                                borderLeft: `3px solid ${n.type === 'warning' ? '#ef4444' : n.type === 'success' ? 'var(--accent-primary)' : 'var(--accent-secondary)'}`,
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                opacity: n.read ? 0.7 : 1
                              }}
                            >
                              <p style={{ margin: 0 }}>{n.text}</p>
                              {!n.read && <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-secondary)', marginTop: '4px' }}></span>}
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* SCREEN 2: Dashboard Overview */}
            {activeTab === 'dashboard' && (
              <div className="animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h1 className="text-gradient">Environmental Impact Overview</h1>
                    <p className="text-secondary-color">Real-time telemetry and carbon score analysis.</p>
                  </div>
                  <button className="btn-primary" onClick={handleSyncData} disabled={syncStatus === 'syncing'}>
                    {syncStatus === 'syncing' ? 'Syncing...' : '🔄 Live Sync Telemetry'}
                  </button>
                </div>

                {/* Important Alert Notice Card (If unread warnings exist) */}
                {notifications.some(n => !n.read && n.type === 'warning') && (
                  <div className="glass-panel mb-6" style={{ borderLeft: '4px solid #ef4444', background: 'rgba(239, 68, 68, 0.05)', padding: '1rem 1.5rem' }}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span style={{ fontSize: '1.25rem' }}>⚠️</span>
                        <div>
                          <h4 style={{ margin: 0, color: '#f8fafc' }}>Active Emissions Warning</h4>
                          <p className="text-xs text-secondary-color" style={{ margin: 0 }}>
                            {notifications.find(n => !n.read && n.type === 'warning').text}
                          </p>
                        </div>
                      </div>
                      <button 
                        className="btn-secondary" 
                        onClick={() => setActiveTab('simulator')} 
                        style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}
                      >
                        Resolve in Simulator
                      </button>
                    </div>
                  </div>
                )}

                <div className="dashboard-grid">
                  {/* Top Total Footprint Panel */}
                  <div className="glass-panel" style={{ position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)' }}></div>
                    <h3 className="text-secondary-color text-sm">Total Footprint</h3>
                    <div className="flex items-baseline gap-2 mt-4 mb-2">
                      <span style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }} className="text-gradient">{breakdown.total}</span>
                      <span className="text-secondary-color font-semibold">kg CO₂ / month</span>
                    </div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--accent-primary)' }}>
                      ↓ 12% lower than last month
                    </p>
                    <div className="progress-bar-container mt-4">
                      <div className="progress-bar-fill" style={{ width: '68%', background: 'var(--accent-primary-gradient)' }}></div>
                    </div>
                  </div>

                  {/* Carbon Score Panel */}
                  <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <h3 className="text-secondary-color text-sm">Sustainability Score</h3>
                    <div className="flex items-center gap-6 mt-2">
                      <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        border: '5px solid rgba(16, 185, 129, 0.15)',
                        borderTopColor: 'var(--accent-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.75rem',
                        fontWeight: '800'
                      }}>
                        {carbonScore}
                      </div>
                      <div>
                        <h4 style={{ color: 'white' }}>Level 3 Guardian</h4>
                        <p className="text-sm text-secondary-color">Excellent! You score higher than 84% of your region.</p>
                      </div>
                    </div>
                  </div>

                  {/* Top Emission Source Panel */}
                  <div className="glass-panel">
                    <h3 className="text-secondary-color text-sm">Top Emission Source</h3>
                    <div className="mt-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-lg">
                          {breakdown.food > breakdown.electricity ? '🍔 Diet & Food' : '⚡ Home Electricity'}
                        </span>
                        <span className="badge badge-hard">High Contributor</span>
                      </div>
                      <p className="text-sm text-secondary-color">
                        {breakdown.food > breakdown.electricity 
                          ? `Diet accounts for ${Math.round((breakdown.food / breakdown.total)*100)}% of your footprint.`
                          : `Electricity accounts for ${Math.round((breakdown.electricity / breakdown.total)*100)}% of your footprint.`}
                      </p>
                      <button 
                        className="btn-secondary w-full mt-4" 
                        onClick={() => setActiveTab('simulator')} 
                        style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                      >
                        ⚡ Simulate Reductions
                      </button>
                    </div>
                  </div>
                </div>

                {/* Dashboard Category Breakdown */}
                <h3 className="mt-6 mb-3">Carbon Breakdown by Category</h3>
                <div className="dashboard-grid-3">
                  <div className="glass-panel" style={{ borderLeft: '4px solid var(--color-transport)' }}>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-color text-sm">Transportation</span>
                      <span style={{ color: 'var(--color-transport)', fontWeight: 'bold' }}>{breakdown.transport} kg</span>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-fill" style={{ width: `${Math.min(100, (breakdown.transport/breakdown.total)*100)}%`, backgroundColor: 'var(--color-transport)' }}></div>
                    </div>
                    <p className="text-xs text-muted-color mt-2">Car: {activities.carTravel}km | Transit: {activities.publicTransit}km</p>
                  </div>

                  <div className="glass-panel" style={{ borderLeft: '4px solid var(--color-electricity)' }}>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-color text-sm">Electricity</span>
                      <span style={{ color: 'var(--color-electricity)', fontWeight: 'bold' }}>{breakdown.electricity} kg</span>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-fill" style={{ width: `${Math.min(100, (breakdown.electricity/breakdown.total)*100)}%`, backgroundColor: 'var(--color-electricity)' }}></div>
                    </div>
                    <p className="text-xs text-muted-color mt-2">Base: {activities.electricity}kWh | AC: {activities.acHours}h/day</p>
                  </div>

                  <div className="glass-panel" style={{ borderLeft: '4px solid var(--color-food)' }}>
                    <div className="flex justify-between items-center">
                      <span className="text-secondary-color text-sm">Food (Diet)</span>
                      <span style={{ color: 'var(--color-food)', fontWeight: 'bold' }}>{breakdown.food} kg</span>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-fill" style={{ width: `${Math.min(100, (breakdown.food/breakdown.total)*100)}%`, backgroundColor: 'var(--color-food)' }}></div>
                    </div>
                    <p className="text-xs text-muted-color mt-2">{activities.meatMeals} meat meals / week</p>
                  </div>
                </div>

                <div className="dashboard-grid mt-6">
                  {/* Smart Data Collection Explanation */}
                  <div className="glass-panel">
                    <h3>💡 How we collect data & integrate</h3>
                    <p className="text-sm text-secondary-color mb-3">
                      ImpactSphere is designed to require zero manual logs. We gather data automatically using secure native platform integrations:
                    </p>
                    <ul className="text-sm text-secondary-color" style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <li><strong>Smart Meters (IoT)</strong>: Real-time electricity consumption pulls directly from smart grid utility providers.</li>
                      <li><strong>Mobile GPS Telemetry</strong>: Automatically detects transport modes (walking, cycling, vehicular speed matching) to log mobility.</li>
                      <li><strong>Connected Vehicles</strong>: Syncs directly with Tesla/EV APIs for battery drain mapping and smart charges.</li>
                    </ul>
                  </div>

                  {/* AI Quick Recommendation */}
                  <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3>🤖 Coach recommendation</h3>
                      <p className="text-sm text-secondary-color">
                        "Your AC and heating metrics in Chennai account for <strong>{Math.round((breakdown.electricity / breakdown.total)*100)}%</strong> of energy footprint. Try reducing AC time by 1 hour daily to save 15.1 kg of monthly CO₂ emissions."
                      </p>
                    </div>
                    <button className="btn-primary w-full mt-4" onClick={() => setActiveTab('coach')}>
                      💬 Chat with AI Coach
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 3: Automated Activity Tracking */}
            {activeTab === 'tracking' && (
              <div className="animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h1 className="text-gradient">Automated Activity Tracking</h1>
                    <p className="text-secondary-color">Automatic telemetry tracking state of active devices and locations.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-secondary-color">GPS Tracking Status:</span>
                    <label className="switch">
                      <input type="checkbox" checked={gpsPermission} onChange={() => {
                        setGpsPermission(!gpsPermission);
                        triggerToast(!gpsPermission ? "GPS Permission Granted. Resuming live telemetry!" : "GPS Permission Revoked.");
                      }} />
                      <span className="slider-toggle"></span>
                    </label>
                  </div>
                </div>

                <div className="glass-panel mb-6">
                  <h3>Real-time Activities Logged Today</h3>
                  <div className="dashboard-grid-3 mt-4">
                    <div style={{ textAlign: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                      <span style={{ fontSize: '2rem' }}>🚶</span>
                      <h4 className="mt-2">Walked & Cycled</h4>
                      <p className="text-2xl font-bold text-gradient">{(activities.walkingCycling / 30).toFixed(1)} km</p>
                      <span className="text-xs text-muted-color">Saved 1.2 kg CO₂</span>
                    </div>

                    <div style={{ textAlign: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                      <span style={{ fontSize: '2rem' }}>🚗</span>
                      <h4 className="mt-2">Vehicular Commute</h4>
                      <p className="text-2xl font-bold text-gradient" style={{ color: '#ef4444', WebkitTextFillColor: 'initial' }}>{(activities.carTravel / 30).toFixed(1)} km</p>
                      <span className="text-xs text-muted-color">Generated 0.8 kg CO₂</span>
                    </div>

                    <div style={{ textAlign: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                      <span style={{ fontSize: '2rem' }}>⚡</span>
                      <h4 className="mt-2">Smart Grid Power</h4>
                      <p className="text-2xl font-bold text-gradient">{(activities.electricity / 30).toFixed(1)} kWh</p>
                      <span className="text-xs text-muted-color">Grid factor standard</span>
                    </div>
                  </div>
                </div>

                <h3>Connected API Integrations</h3>
                <div className="dashboard-grid mt-4">
                  <div className="integration-card">
                    <div className="flex items-center gap-3">
                      <div className="integration-icon">🍎</div>
                      <div>
                        <h4>Apple Health / Google Fit</h4>
                        <p className="text-xs text-secondary-color">Active sync for walking & biking miles</p>
                      </div>
                    </div>
                    <button className="btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }} onClick={() => triggerToast("Apple Health connected and synchronized.")}>Connected</button>
                  </div>

                  <div className="integration-card">
                    <div className="flex items-center gap-3">
                      <div className="integration-icon">🚗</div>
                      <div>
                        <h4>Tesla Smart API</h4>
                        <p className="text-xs text-secondary-color">EV charging & drivetrain monitoring</p>
                      </div>
                    </div>
                    <button className="btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }} onClick={() => triggerToast("Tesla Smart API connected.")}>Connect API</button>
                  </div>

                  <div className="integration-card">
                    <div className="flex items-center gap-3">
                      <div className="integration-icon">⚡</div>
                      <div>
                        <h4>TNEB Smart Meter API</h4>
                        <p className="text-xs text-secondary-color">Live grid power tracking data</p>
                      </div>
                    </div>
                    <button className="btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }} onClick={() => triggerToast("Smart Meter integration is healthy.")}>Connected</button>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 4: AI Sustainability Coach & Chatbot */}
            {activeTab === 'coach' && (
              <div className="animate-fade-in">
                <h1 className="text-gradient">🤖 AI Sustainability Coach</h1>
                <p className="text-secondary-color mb-6">Personalized AI insights and conversational assistance based on your Chennai activity telemetry.</p>

                <div className="dashboard-grid">
                  {/* Chatbot Column */}
                  <div className="chatbot-container glass-panel" style={{ padding: 0 }}>
                    <div className="chatbot-header">
                      <div className="user-avatar" style={{ background: 'var(--accent-primary-gradient)' }}>AI</div>
                      <div>
                        <h4 style={{ margin: 0 }}>Coach Nova</h4>
                        <p className="text-xs text-secondary-color" style={{ margin: 0 }}>Active • Personal Sustainability Advisor</p>
                      </div>
                    </div>

                    <div className="chatbot-messages">
                      {chatMessages.map((msg, index) => (
                        <div key={index} className={`chat-bubble ${msg.sender === 'ai' ? 'ai' : 'user'}`}>
                          {msg.text.split('\n').map((line, lidx) => (
                            <p key={lidx}>{line}</p>
                          ))}
                        </div>
                      ))}
                      {isAiTyping && (
                        <div className="chat-bubble ai typing-indicator">
                          <div className="typing-dot"></div>
                          <div className="typing-dot"></div>
                          <div className="typing-dot"></div>
                        </div>
                      )}
                    </div>

                    <div className="chat-suggestions">
                      <span className="text-xs text-muted-color w-full mb-1">Quick Questions:</span>
                      <button className="suggestion-chip" onClick={() => submitChatQuestion("Why did my emissions increase?")}>Why did my emissions increase?</button>
                      <button className="suggestion-chip" onClick={() => submitChatQuestion("What can I improve this week?")}>What can I improve this week?</button>
                      <button className="suggestion-chip" onClick={() => submitChatQuestion("How can I reduce emissions by 20%?")}>How can I reduce emissions by 20%?</button>
                    </div>

                    <div className="chatbot-input-area">
                      <input 
                        type="text" 
                        className="input-control" 
                        style={{ flex: 1, marginBottom: 0 }}
                        placeholder="Ask Nova about your footprint..." 
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') submitChatQuestion(chatInput); }}
                      />
                      <button className="btn-primary" onClick={() => submitChatQuestion(chatInput)}>Send</button>
                    </div>
                  </div>

                  {/* Recommendation Summary Column */}
                  <div className="flex flex-col gap-6">
                    <div className="glass-panel">
                      <h3>📊 Main Contributors</h3>
                      <div className="flex flex-col gap-3 mt-4">
                        <div className="flex justify-between text-sm">
                          <span>🍔 Food Intake (Weekly Diet)</span>
                          <span className="font-semibold">{Math.round((breakdown.food / breakdown.total)*100)}%</span>
                        </div>
                        <div className="progress-bar-container" style={{ marginTop: 0 }}>
                          <div className="progress-bar-fill" style={{ width: `${(breakdown.food / breakdown.total)*100}%`, background: 'var(--color-food)' }}></div>
                        </div>

                        <div className="flex justify-between text-sm">
                          <span>⚡ Air Conditioning & HVAC</span>
                          <span className="font-semibold">{Math.round(((activities.acHours * 30 * CALC_MULTIPLIERS.acHour) / breakdown.total)*100)}%</span>
                        </div>
                        <div className="progress-bar-container" style={{ marginTop: 0 }}>
                          <div className="progress-bar-fill" style={{ width: `${((activities.acHours * 30 * CALC_MULTIPLIERS.acHour) / breakdown.total)*100}%`, background: 'var(--color-electricity)' }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="glass-panel" style={{ borderLeft: '4px solid var(--accent-secondary)' }}>
                      <h3>💡 Did You Know?</h3>
                      <p className="text-sm text-secondary-color mt-2">
                        Chennai's electricity grid is heavily fossil-fueled. Shifting your AC thermostat up by just 2 degrees reduces energy consumption by nearly 18%, saving you money while keeping comfort identical.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 5: Gamified Action Quests */}
            {activeTab === 'quests' && (
              <div className="animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h1 className="text-gradient">Action Quests</h1>
                    <p className="text-secondary-color">Gamified local sustainability challenges based on actual telemetry logs.</p>
                  </div>
                  <div style={{ padding: '0.5rem 1rem', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                    <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>🔥 {userData.streak} Days Daily Streak</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {quests.map((quest) => (
                    <div key={quest.id} className="glass-panel flex justify-between items-center" style={{ opacity: quest.status === 'completed' ? 0.65 : 1 }}>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 style={{ margin: 0 }}>{quest.title}</h3>
                          <span className={`badge badge-${quest.difficulty}`}>{quest.difficulty.toUpperCase()}</span>
                        </div>
                        <p className="text-sm text-secondary-color">{quest.description}</p>
                        <div className="flex gap-4 mt-3 text-xs text-muted-color">
                          <span>Reward: <strong>+{quest.points} Points</strong></span>
                          <span>Offsets: <strong>-{quest.co2Saved} kg CO₂ / week</strong></span>
                        </div>
                      </div>

                      <div>
                        {quest.status === 'available' && (
                          <button className="btn-primary" onClick={() => handleQuestAction(quest.id, 'accept')}>Accept Quest</button>
                        )}
                        {quest.status === 'active' && (
                          <button className="btn-secondary" style={{ borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }} onClick={() => handleQuestAction(quest.id, 'complete')}>Complete</button>
                        )}
                        {quest.status === 'completed' && (
                          <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            ✓ Saved {quest.co2Saved}kg
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SCREEN 6: Carbon Reduction Simulator */}
            {activeTab === 'simulator' && (
              <div className="animate-fade-in">
                <h1 className="text-gradient">Carbon Reduction Simulator</h1>
                <p className="text-secondary-color mb-6">Test out behavioral tweaks and view simulated impacts on your carbon footprint before committing.</p>

                <div className="dashboard-grid">
                  {/* Sliders Panel */}
                  <div className="glass-panel">
                    <h3>Simulation Adjustments</h3>
                    <p className="text-xs text-secondary-color mb-4">Adjust sliders to see potential changes.</p>

                    {/* AC slider */}
                    <div className="simulator-slider-group">
                      <div className="slider-header">
                        <span>Air Conditioning Usage</span>
                        <span className="font-semibold">{simAcHours} hrs/day</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="24" 
                        className="range-slider"
                        value={simAcHours}
                        onChange={(e) => setSimAcHours(Number(e.target.value))}
                      />
                      <span className="text-xs text-muted-color">Baseline: {activities.acHours}h/day</span>
                    </div>

                    {/* Car Travel slider */}
                    <div className="simulator-slider-group">
                      <div className="slider-header">
                        <span>Personal Car Transit</span>
                        <span className="font-semibold">{simCarTravel} km/month</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="800" 
                        className="range-slider"
                        value={simCarTravel}
                        onChange={(e) => setSimCarTravel(Number(e.target.value))}
                      />
                      <span className="text-xs text-muted-color">Baseline: {activities.carTravel}km</span>
                    </div>

                    {/* Public Transit slider */}
                    <div className="simulator-slider-group">
                      <div className="slider-header">
                        <span>Public Metro / Bus Transit</span>
                        <span className="font-semibold">{simTransit} km/month</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="800" 
                        className="range-slider"
                        value={simTransit}
                        onChange={(e) => setSimTransit(Number(e.target.value))}
                      />
                      <span className="text-xs text-muted-color">Baseline: {activities.publicTransit}km</span>
                    </div>

                    {/* Diet slider */}
                    <div className="simulator-slider-group">
                      <div className="slider-header">
                        <span>Weekly Meat Meals</span>
                        <span className="font-semibold">{simMeatMeals} / 21 meals</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="21" 
                        className="range-slider"
                        value={simMeatMeals}
                        onChange={(e) => setSimMeatMeals(Number(e.target.value))}
                      />
                      <span className="text-xs text-muted-color">Baseline: {activities.meatMeals} meals</span>
                    </div>

                    <button 
                      className="btn-primary w-full mt-2" 
                      onClick={() => {
                        setActivities(prev => ({
                          ...prev,
                          acHours: simAcHours,
                          carTravel: simCarTravel,
                          publicTransit: simTransit,
                          meatMeals: simMeatMeals
                        }));
                        triggerToast("Applied simulated parameters as your current target metrics!");
                      }}
                    >
                      Apply Scenario to Targets
                    </button>
                  </div>

                  {/* Results Panel */}
                  <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3>Impact Comparison</h3>
                      <p className="text-sm text-secondary-color mb-6">Simulated monthly footprint comparison.</p>

                      <div className="flex justify-between items-center mb-2 text-sm">
                        <span>Current Footprint:</span>
                        <span className="font-bold">{breakdown.total} kg CO₂</span>
                      </div>
                      <div className="progress-bar-container mb-4" style={{ height: '14px' }}>
                        <div className="progress-bar-fill" style={{ width: '100%', background: 'rgba(255,255,255,0.15)' }}></div>
                      </div>

                      <div className="flex justify-between items-center mb-2 text-sm">
                        <span>Projected Footprint:</span>
                        <span className="font-bold text-gradient" style={{ color: 'var(--accent-secondary)' }}>{simBreakdown.total} kg CO₂</span>
                      </div>
                      <div className="progress-bar-container mb-4" style={{ height: '14px' }}>
                        <div className="progress-bar-fill" style={{ width: `${Math.min(100, (simBreakdown.total / breakdown.total) * 100)}%`, background: 'var(--accent-primary-gradient)' }}></div>
                      </div>
                    </div>

                    <div className="border-t pt-4 mt-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-semibold">Net Savings:</span>
                        <span style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                          {Math.max(0, breakdown.total - simBreakdown.total)} kg
                        </span>
                      </div>
                      <p className="text-xs text-secondary-color">
                        {breakdown.total > simBreakdown.total 
                          ? `Decreasing your AC usage and vehicle commutes saves ${Math.round(((breakdown.total - simBreakdown.total)/breakdown.total)*100)}% of your monthly emissions!`
                          : "Increase resource usage will result in a larger footprint."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 7: Community Impact Screen */}
            {activeTab === 'community' && (
              <div className="animate-fade-in">
                <h1 className="text-gradient">🌍 Community Impact Dashboard</h1>
                <p className="text-secondary-color mb-6">Track collective achievements and local leaderboard standings in Chennai.</p>

                <div className="dashboard-grid">
                  {/* Chennai stats */}
                  <div className="glass-panel">
                    <h3>Community Achievements</h3>
                    <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                      <span style={{ fontSize: '3rem' }}>🌳</span>
                      <h2 className="text-gradient mt-3">8.4 Tons CO₂ Saved</h2>
                      <p className="text-secondary-color text-sm">Saved by you and 500 active Chennai users this month!</p>
                    </div>

                    <div className="border-t pt-4 flex justify-between text-sm">
                      <div>
                        <span className="text-muted-color">Rank in City:</span>
                        <p className="font-bold text-gradient">#42 of 500</p>
                      </div>
                      <div>
                        <span className="text-muted-color">Active Teams:</span>
                        <p className="font-bold text-gradient">18 Chennai Teams</p>
                      </div>
                    </div>
                  </div>

                  {/* Leaderboards */}
                  <div className="glass-panel">
                    <h3>Metropolitan Leaderboard</h3>
                    <div className="leaderboard-list">
                      <div className="leaderboard-item highlight">
                        <span className="leaderboard-rank top-1">1</span>
                        <div className="leaderboard-user">
                          <div className="user-avatar">CH</div>
                          <div>
                            <span className="font-semibold">Chennai (Your Region)</span>
                            <p className="text-xs text-secondary-color">500 active users</p>
                          </div>
                        </div>
                        <span className="font-bold" style={{ color: 'var(--accent-primary)' }}>8.4 Tons</span>
                      </div>

                      <div className="leaderboard-item">
                        <span className="leaderboard-rank top-2">2</span>
                        <div className="leaderboard-user">
                          <div className="user-avatar" style={{ background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)' }}>BL</div>
                          <div>
                            <span className="font-semibold">Bangalore Central</span>
                            <p className="text-xs text-secondary-color">450 active users</p>
                          </div>
                        </div>
                        <span className="font-bold">7.8 Tons</span>
                      </div>

                      <div className="leaderboard-item">
                        <span className="leaderboard-rank top-3">3</span>
                        <div className="leaderboard-user">
                          <div className="user-avatar" style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)' }}>MB</div>
                          <div>
                            <span className="font-semibold">Mumbai Metro</span>
                            <p className="text-xs text-secondary-color">410 active users</p>
                          </div>
                        </div>
                        <span className="font-bold">6.9 Tons</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="mt-6 mb-3">Chennai Team Challenges</h3>
                <div className="dashboard-grid">
                  <div className="glass-panel">
                    <div className="flex justify-between items-center mb-2">
                      <h4>Chennai Green Commuters</h4>
                      <span className="badge badge-medium">Active</span>
                    </div>
                    <p className="text-sm text-secondary-color">Goal: Ride 10,000 collective kilometers on public transit.</p>
                    <div className="progress-bar-container">
                      <div className="progress-bar-fill" style={{ width: '82%', background: 'var(--accent-primary-gradient)' }}></div>
                    </div>
                    <span className="text-xs text-muted-color mt-2 block">8,200 km traversed (82%) • 3 days left</span>
                  </div>

                  <div className="glass-panel">
                    <div className="flex justify-between items-center mb-2">
                      <h4>AC Saver Squad</h4>
                      <span className="badge badge-easy">Active</span>
                    </div>
                    <p className="text-sm text-secondary-color">Goal: Reduce total community cooling draw by 500 kWh.</p>
                    <div className="progress-bar-container">
                      <div className="progress-bar-fill" style={{ width: '45%', background: 'var(--accent-primary-gradient)' }}></div>
                    </div>
                    <span className="text-xs text-muted-color mt-2 block">225 kWh saved (45%) • 5 days left</span>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 8: Advocacy Panel */}
            {activeTab === 'advocacy' && (
              <div className="animate-fade-in">
                <h1 className="text-gradient">📢 Micro-Advocacy Campaign</h1>
                <p className="text-secondary-color mb-6">Drive structural changes by contacting landlord property managers and city representatives about local infrastructure.</p>

                <div className="dashboard-grid">
                  {/* Selector column */}
                  <div className="glass-panel">
                    <h3>Identified Structural Issues</h3>
                    <p className="text-xs text-secondary-color mb-4">We detected systemic sources based on telemetry logs.</p>
                    
                    <div 
                      className={`nav-item ${selectedAdvocacy === 'landlord' ? 'active' : ''}`}
                      onClick={() => setSelectedAdvocacy('landlord')}
                      style={{ padding: '1rem', borderLeft: selectedAdvocacy === 'landlord' ? '3px solid var(--accent-primary)' : 'none' }}
                    >
                      🏢 HVAC insulation check (Landlord Request)
                    </div>

                    <div 
                      className={`nav-item ${selectedAdvocacy === 'councillor' ? 'active' : ''}`}
                      onClick={() => setSelectedAdvocacy('councillor')}
                      style={{ padding: '1rem', borderLeft: selectedAdvocacy === 'councillor' ? '3px solid var(--accent-primary)' : 'none' }}
                    >
                      🚴 Bike lanes request (Local Ward Councillor)
                    </div>

                    <div className="input-group mt-6">
                      <label>Sender Name</label>
                      <input 
                        type="text" 
                        className="input-control" 
                        value={emailSenderName} 
                        onChange={(e) => setEmailSenderName(e.target.value)} 
                      />
                    </div>
                  </div>

                  {/* Mail Body column */}
                  <div className="glass-panel">
                    <h3>Email Template Preview</h3>
                    <div className="email-template">
                      <strong>Subject: {emailDetails.subject}</strong>
                      <br /><br />
                      {emailDetails.body}
                    </div>

                    <div className="flex gap-4 mt-6">
                      <button className="btn-primary flex-1" onClick={() => handleEmailAction('send')}>
                        📧 Send Email
                      </button>
                      <button className="btn-secondary" onClick={() => {
                        navigator.clipboard.writeText(`Subject: ${emailDetails.subject}\n\n${emailDetails.body}`);
                        handleEmailAction('copy');
                      }}>
                        {emailCopied ? '✓ Copied' : '📋 Copy Body'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 9: Reports & Analytics */}
            {activeTab === 'reports' && (
              <div className="animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h1 className="text-gradient">Reports & Analytics</h1>
                    <p className="text-secondary-color">Audit historical emissions and download verified sustainability logs.</p>
                  </div>
                  <button className="btn-primary" onClick={handlePdfDownload}>
                    📥 Download PDF Report
                  </button>
                </div>

                <div className="glass-panel mb-6">
                  <h3>Carbon Footprint Reduction History (Last 6 Months)</h3>
                  
                  {/* Custom SVG Line Chart */}
                  <div style={{ position: 'relative', height: '240px', width: '100%', marginTop: '2rem' }}>
                    <svg viewBox="0 0 500 200" width="100%" height="100%" preserveAspectRatio="none">
                      <line x1="0" y1="40" x2="500" y2="40" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                      <line x1="0" y1="80" x2="500" y2="80" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                      <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                      <line x1="0" y1="160" x2="500" y2="160" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                      
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.4"/>
                          <stop offset="100%" stopColor="var(--accent-secondary)" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path d="M 0 160 Q 100 130 200 110 T 400 90 L 500 80 L 500 200 L 0 200 Z" fill="url(#chartGrad)" />

                      <path d="M 0 160 Q 100 130 200 110 T 400 90 L 500 80" fill="none" stroke="var(--accent-primary)" strokeWidth="3" />

                      <circle cx="0" cy="160" r="4" fill="white" />
                      <circle cx="100" cy="145" r="4" fill="white" />
                      <circle cx="200" cy="110" r="4" fill="white" />
                      <circle cx="300" cy="98" r="4" fill="white" />
                      <circle cx="400" cy="90" r="4" fill="white" />
                      <circle cx="500" cy="80" r="4" fill="var(--accent-secondary)" />
                    </svg>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      <span>Jan (540kg)</span>
                      <span>Feb (510kg)</span>
                      <span>Mar (470kg)</span>
                      <span>Apr (455kg)</span>
                      <span>May (430kg)</span>
                      <span style={{ color: 'var(--accent-secondary)', fontWeight: 'bold' }}>Jun ({breakdown.total}kg)</span>
                    </div>
                  </div>
                </div>

                <div className="dashboard-grid">
                  <div className="glass-panel">
                    <h3>Emissions Trend</h3>
                    <ul className="text-sm text-secondary-color mt-3 flex flex-col gap-2">
                      <li><strong>Transportation</strong>: ↓ 15% (increased biking and metro offsets)</li>
                      <li><strong>Electricity</strong>: ↑ 5% (Chennai summer air conditioning)</li>
                      <li><strong>Waste Management</strong>: 0% change</li>
                    </ul>
                  </div>

                  <div className="glass-panel">
                    <h3>Savings Equivalency</h3>
                    <div className="flex items-center gap-4 mt-3">
                      <span style={{ fontSize: '3rem' }}>🌳</span>
                      <div>
                        <h4>14 Pine Trees Planted</h4>
                        <p className="text-xs text-secondary-color">Your 120 kg offset in the last 3 months is equivalent to planting 14 mature pine trees.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 10: Settings Screen */}
            {activeTab === 'settings' && (
              <div className="animate-fade-in">
                <h1 className="text-gradient">Settings & Connections</h1>
                <p className="text-secondary-color mb-6">Manage profile info, location references, active APIs, and logins.</p>

                <div className="dashboard-grid">
                  <div className="glass-panel">
                    <h3>User Information</h3>
                    <div className="flex flex-col gap-4 mt-4">
                      <div className="input-group">
                        <label>Profile Username</label>
                        <input 
                          type="text" 
                          className="input-control" 
                          value={userData.name} 
                          onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} 
                        />
                      </div>

                      <div className="input-group">
                        <label>Reference City Location</label>
                        <input 
                          type="text" 
                          className="input-control" 
                          value={userData.location} 
                          onChange={(e) => setUserData(prev => ({ ...prev, location: e.target.value }))} 
                        />
                      </div>

                      <div className="input-group">
                        <label>Email ID</label>
                        <input 
                          type="email" 
                          className="input-control" 
                          value={userData.email} 
                          disabled 
                        />
                      </div>

                      <div className="border-t pt-4 flex flex-col gap-4">
                        <button className="btn-primary" onClick={() => triggerToast("Profile changes updated successfully.")}>
                          Save Settings
                        </button>
                        <button className="btn-danger" onClick={() => {
                          setIsLoggedIn(false);
                          triggerToast("Logged out successfully.");
                        }}>
                          Sign Out of Account
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3>📞 Helplines & Eco-Consultations</h3>
                      <p className="text-sm text-secondary-color mt-3 mb-4">
                        Need structural guidance, energy audits, or support with municipal recycling initiatives? Reach out to our dedicated counselors:
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>TOLL-FREE CALL SUPPORT</span>
                          <h4 style={{ margin: '0.25rem 0 0 0', color: 'var(--accent-secondary)' }}>+1 (800) 555-2568</h4>
                        </div>
                        <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>DIRECT SUPPORT EMAIL</span>
                          <h4 style={{ margin: '0.25rem 0 0 0', color: 'var(--accent-primary)' }}>support@impactsphere.org</h4>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-color mt-6">
                      Our services are certified by regional environmental advocacy associations. Responses are typically generated within 2 hours.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </>
      )}
    </div>
  );
}

export default App;

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock Data
const telemetryData = {
  carTravel: 120,
  publicTransit: 240,
  walkingCycling: 65,
  electricity: 350,
  acHours: 8,
  meatMeals: 14,
  waste: 40
};

const quests = [
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
];

const notifications = [
  { id: 1, text: "⚠️ High AC usage alert: Your cooling hours exceeded 8 hours yesterday.", type: 'warning', read: false },
  { id: 2, text: "🔥 Streak Alert: Complete a quest today to maintain your 5-day streak!", type: 'info', read: false },
  { id: 3, text: "🏆 Achievement unlocked: You earned the 'Green Commuter' badge!", type: 'success', read: true }
];

// Routes
app.get('/api/telemetry', (req, res) => {
  res.json(telemetryData);
});

app.get('/api/quests', (req, res) => {
  res.json(quests);
});

app.get('/api/notifications', (req, res) => {
  res.json(notifications);
});

app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const lowerText = message.toLowerCase();
  let response = "";

  if (lowerText.includes("why did") && lowerText.includes("increase")) {
    response = `Your emissions increased due to your vehicle travel changing from 110km to 120km this month. Also, your AC was active for 8 hrs/day during the Chennai summer heat. Reducing AC by just 1 hr/day will save ~15 kg CO₂.`;
  } else if (lowerText.includes("what can i improve") || lowerText.includes("improve this week")) {
    response = `Based on your Chennai dashboard, here are your top three action points for this week:
1. Try replacing 3 meat meals with plant-based options to save 5.4 kg CO₂.
2. Maintain your AC at 26°C instead of 22°C to reduce electrical load.
3. Accept the 'Transit Tuesday' quest to offset your car emissions.`;
  } else if (lowerText.includes("reduce emissions by 20%") || lowerText.includes("reduce by 20%")) {
    response = `To reduce your carbon footprint by 20% (approx. 90 kg CO₂/month), I suggest combining these measures:
• Travel: Shift 80km of car travel to public transit (saves 11.2 kg CO₂).
• Home: Decrease AC usage from 8 to 5 hours/day (saves 45 kg CO₂).
• Diet: Shift from 14 meat meals to 7 per week (saves 54 kg CO₂).
Total potential monthly savings: 110 kg CO₂.`;
  } else {
    response = `Interesting question! In Chennai, shifting to public transit and optimizing air conditioning are key. Have you tried adjusting the values in the Carbon Reduction Simulator tab to test these exact scenarios?`;
  }

  res.json({ response });
});

app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`🌿 ImpactSphere Backend running on port ${PORT}`);
  console.log(`=========================================`);
});

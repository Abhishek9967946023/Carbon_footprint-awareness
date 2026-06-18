# ImpactSphere - Carbon Telemetry & AI Coach Tracker

ImpactSphere is a premium, glassmorphism-themed sustainability platform that tracks user activities (transport, home cooling, diet, waste) and uses an Express.js backend API and AI chatbot to guide users toward lowering their carbon footprint.

---

## 🚀 How to Run the Project in Your Terminal

Follow these steps to start the servers yourself:

### Step 1: Open Your Terminal
Open your terminal (Command Prompt, Git Bash, or PowerShell) and navigate to the project's root folder:
```bash
cd c:\Users\Abhishek\Desktop\carbon_footprint
```

### Step 2: Install Dependencies (If needed)
If you ever clean or copy the project to a new place, install the backend packages by running:
```bash
npm install --prefix backend
```

### Step 3: Run the Application

You can start the project in three different ways:

#### Option A: Run Both Frontend & Backend Concurrently (Recommended)
Run the root start command:
```bash
npm start
```
*💡 **PowerShell script execution error?** If your terminal blocks PowerShell scripts (like `.ps1`), bypass the restriction by calling the Command Prompt batch script version directly:*
```powershell
npm.cmd start
```

#### Option B: Run Frontend Only
To start only the Vite React dev server:
```bash
npm run dev
# PowerShell Bypass:
npm.cmd run dev
```

#### Option C: Run Backend Only
To start only the Express API server:
```bash
npm run backend
# PowerShell Bypass:
npm.cmd run backend
```

---

## 🌐 Accessing the App

Once the frontend server starts:
- Open your browser and go to: **[http://localhost:5173/](http://localhost:5173/)**
- The React frontend will automatically communicate with the Express API running on **`http://localhost:5000`**. If the backend is offline, the frontend will automatically fall back to standalone offline simulation mode.

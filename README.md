# ✈️ Flight Booking App

A full-stack flight booking web application that lets users search and book flights through a clean, responsive interface — built with **React** and powered by **Skyscanner's Backpack design system**, backed by a custom **Node.js/Express REST API**.

**🔗 Live Demo:** [Add your deployed link here]
**📦 Repo:** [Flight_Booking_App](https://github.com/Monica-Web88/Flight_Booking_App)

---

## 📖 Overview

This project simulates a real-world travel booking platform, covering the full user journey — searching flights, viewing results, selecting an itinerary, and completing a booking. It was built to practice production-grade frontend architecture using the same component library that powers Skyscanner's own products, paired with a self-built backend API for handling flight data and bookings.

---

## ✨ Key Features

- 🔍 **Flight search** with origin, destination, dates, and passenger count
- 📋 **Dynamic results listing** with filtering/sorting
- 🧾 **Booking flow** from selection to confirmation
- 📱 **Fully responsive design** across mobile, tablet, and desktop
- ♿ **Accessible UI** built on Backpack's accessibility-first components
- ⚡ **RESTful API integration** for live flight/booking data

---

## 🛠️ Tech Stack

### Frontend
- **React** (Create React App + `backpack-react-scripts`)
- **JavaScript (ES6+)**
- **SASS / CSS Modules** for styling
- **Skyscanner Backpack** — Skyscanner's open-source design system (see below)

### Backend
- **Node.js**
- **Express.js** — REST API for flight search, results, and booking endpoints
- **[Add your database here, e.g. MongoDB / PostgreSQL]**

### Tooling
- npm scripts for build/test/dev workflows
- Babel/Webpack (via `backpack-react-scripts`)

---

## 🎒 Why Skyscanner Backpack?

This project uses [**Backpack**](https://github.com/Skyscanner/backpack), Skyscanner's production design system, instead of a generic UI kit. Building with Backpack meant:

- Working with the **same component architecture used in a live, high-traffic travel product**
- Following **strict accessibility and design-token standards** out of the box
- Structuring styles using **CSS Modules via SASS**, matching how Backpack components are themed
- Gaining hands-on experience with an **enterprise-grade, well-documented component library**, rather than building common UI patterns (date pickers, calendars, cards) from scratch

This choice reflects an interest in writing frontend code the way it's done at scale in industry, not just tutorial-style projects.

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Monica-Web88/Flight_Booking_App.git
cd Flight_Booking_App/my-app

# Install dependencies
npm install

# Run the app locally
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Available Scripts
| Command | Description |
|---|---|
| `npm start` | Runs the app in development mode |
| `npm test` | Runs the test suite |
| `npm run build` | Builds an optimized production bundle |

---

## 📂 Project Structure

```
my-app/
  src/
    components/     # Reusable UI components (Backpack + custom)
    pages/          # Route-level views (Search, Results, Booking)
    services/       # API calls to the backend
    styles/         # SASS/CSS Module stylesheets
  public/
```

---

## 🧠 What I Learned / Challenges Solved

- Integrating a third-party design system (Backpack) cleanly with custom app logic
- Structuring a multi-step booking flow with shared state across pages
- Connecting a React frontend to a self-built Express REST API
- Handling responsive layouts and accessibility requirements without sacrificing design consistency

---

## 📬 Contact

**[Your Name]**
[Your Email] · [LinkedIn] · [Portfolio]

---

*This project was originally bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [backpack-react-scripts](https://github.com/Skyscanner/backpack-react-scripts).*

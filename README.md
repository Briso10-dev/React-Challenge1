# Date Stepper React Challenge

A hands-on React mini-project to practice state management, component design, and user interaction by incrementing/decrementing dates with adjustable steps.

## 🚀 Project Overview
This project is a solution to a Udemy React course challenge. It helps you practice core React skills:
- **State management** using hooks (`useState`).
- **Component composition** (custom `Button` component).
- **User interaction** with range sliders, text inputs, and buttons.
- **Date manipulation** in JavaScript.
- **Styling** with Tailwind CSS for a modern look.

### ✨ Features
- **Adjustable Step Control:** Use a slider to set how much the date changes with each increment/decrement.
- **Increment/Decrement Counter:** Change the count using + and - buttons or by typing directly.
- **Live Date Display:** See the resulting date update instantly based on the current counter value.
- **Reset Functionality:** Quickly reset both the step and counter to their initial values.
- **Responsive & Attractive UI:** Built with Tailwind CSS for a clean, modern appearance.

## 🛠️ How It Works
- The app starts from a base date (April 18, 2025).
- The **step** value (set by a slider) determines how many days to add/subtract per increment.
- The **counter** tracks how many steps to move from the base date.
- The displayed date updates as you interact with the controls.

## 📂 Project Structure
```
React-Challenge1/
├── src/
│   ├── components/
│   │   ├── App.jsx       # Main app logic
│   │   └── button.jsx   # Reusable Button component
│   ├── index.css        # Tailwind styles
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Project metadata & dependencies
└── README.md            # You're here!
```

## 🧑‍💻 Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
2. **Run the app:**
   ```bash
   npm start
   # or
   yarn start
   ```
3. **Open in your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## 📚 Learning Outcomes
- Deepen your understanding of React state and events.
- Practice building custom, reusable components.
- Learn to style with Tailwind CSS.
- Manipulate dates in JavaScript.

## 🏆 Challenge Yourself
Try extending this project by:
- Adding validation for negative counters.
- Allowing custom base dates.
- Animating the date change.
- Adding tests for your components.

**Happy Coding!** 🚀

---

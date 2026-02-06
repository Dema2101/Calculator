# 🧮 Calculator App

**Author:** dema2101  
**Project type:** Learning / Practice project  
**Tech stack:** HTML, CSS, Vanilla JavaScript

---

## 📝 Notes

This project was built as a hands-on learning exercise focused on:
- DOM manipulation
- state management without frameworks
- event-driven logic
- responsive layout with Flexbox

The code intentionally avoids external libraries to better understand core JavaScript concepts.

---

## ✨ Features

- Basic operations: **addition, subtraction, multiplication, division**
- Decimal number support
- Clear (`CLEAR`) and delete (`DELETE`) functionality
- Two-line display:
  - main screen for current input / result
  - small screen for previous number + operator
- Responsive layout
- Custom background image
- Small hidden behavior tied to a specific result 👀

---

## 🧠 Logic Overview

- Numbers are built as **strings** and converted to numbers only when calculating
- Calculator state is handled through:
  - `number1`
  - `operator`
  - `number2`
- Event listeners are initialized once on page load
- Edge cases handled:
  - multiple decimal points
  - empty input treated as zero
  - delete on results
  - prevention of invalid calculations (`NaN`)

---

## 🎨 Styling

- Layout built with **Flexbox**
- Display sizing controlled with `aspect-ratio`
- Background image applied using a `body::before` pseudo-element
- Hover effects on buttons and footer icon

---

## 🖼️ Background & Credits

The background image used in this project features **Brad Pitt**.  
All image rights belong to their respective owners and are used for **educational / non-commercial purposes only**.

If this project is reused or published publicly, the background image should be replaced with properly licensed content.

---

## 🐣 Easter Egg

There is a small hidden behavior connected to a **specific numeric result**.  
If the calculator outputs **77**, pay close attention 👀  

---

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/calculator.git

# RollingRivals 🎲💥

A fun web-based dice game using HTML, CSS, and JavaScript.

## 🧩 Features
- Two dice rolled on browser refresh
- Random values shown only after first visit (via sessionStorage)
- Winner declared using emojis (🚩 / 🤝)
- Clean and responsive layout with colored dice dots

## 🔧 Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)

## 🛠️ How It Works
1. First visit sets a flag in `sessionStorage`
2. From second visit onward, every browser refresh rolls the dice
3. Dice faces update visually using DOM
4. The winner is shown via text and emojis

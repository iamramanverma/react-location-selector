
# 🌍 React Location Selector

A simple and elegant React application that allows users to select a **Country → State → City** dynamically.  
Includes **Submit** and **Reset** buttons with a modern, responsive design using CSS.

---

## 🚀 Features

✅ Dynamic cascading dropdowns (Country → State → City)  
✅ Fully controlled React state management  
✅ Submit button to confirm selection  
✅ Reset button to clear all selections  
✅ Clean, modern, and responsive UI  
✅ Easy to customize with your own data  

---

## 🖼️ Preview

![React Location Selector Demo](https://via.placeholder.com/800x400?text=React+Location+Selector+Preview)

---

## 🛠️ Tech Stack

- **React.js** (Functional Components & Hooks)
- **CSS3** (Modern UI styling)
- **JavaScript (ES6+)**

---

## 📦 Installation & Setup

Follow these steps to run the project locally 👇

```bash
# 1️⃣ Clone this repository
git clone https://github.com/your-username/react-location-selector.git

# 2️⃣ Move into the project folder
cd react-location-selector

# 3️⃣ Install dependencies
npm install

🧩 Folder Structure
react-location-selector/
│
├── src/
│   ├── App.jsx        # Main component
│   ├── App.css        # Styling for the app
│   ├── index.js       # Entry point
│   └── ...other files
│
├── package.json
├── README.md
└── public/

🎯 How It Works

1. Select a Country from the dropdown.

2. Based on that, select a State.

3. Then choose a City.

4. Click Submit to view your selected path.

5. Click Reset to clear all selections and start again.

💡 Customization

 You can easily modify or expand the location data inside the data object in App.jsx.

const data = {
  india: {
    states: {
      Maharashtra: ["Mumbai", "Pune", "Nagpur"],
      Karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
      // Add more states and cities here
    },
  },
  // Add more countries here
};

🤝 Contributing

Contributions are welcome!
Feel free to fork this repo and submit a pull request with improvements.

🧑‍💻 Author

Raman Verma
💼 GitHub | 💬 LinkedIn

🪪 License

This project is licensed under the MIT License — feel free to use and modify it.



# 4️⃣ Start the development server
npm start

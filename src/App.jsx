import { useState } from "react";
import "./App.css";

const data = {
  india: {
    states: {
      Maharashtra: ["Mumbai", "Pune", "Nagpur"],
      Karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
      TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
      Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
      Rajasthan: ["Jaipur", "Udaipur", "Jodhpur"],
      WestBengal: ["Kolkata", "Siliguri", "Durgapur"],
      Punjab: ["Chandigarh", "Amritsar", "Ludhiana"],
      Haryana: ["Gurugram", "Faridabad", "Panipat"],
      Telangana: ["Hyderabad", "Warangal", "Nizamabad"],
      UttarPradesh: ["Lucknow", "Kanpur", "Agra"],
      Bihar: ["Patna", "Gaya", "Bhagalpur"],
      Odisha: ["Bhubaneswar", "Cuttack", "Rourkela"],
    },
  },
  usa: {
    states: {
      California: ["Los Angeles", "San Francisco", "San Diego"],
      NewYork: ["New York City", "Buffalo", "Rochester"],
    },
  },
  germany: {
    states: {
      Bavaria: ["Munich", "Nuremberg", "Augsburg"],
      Berlin: ["Berlin", "Potsdam", "Cottbus"],
    },
  },
};

function App() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (country && state && city) {
      setSubmitted(true);
    } else {
      alert("⚠️ Please select all fields before submitting!");
      setSubmitted(false);
    }
  };

  const handleReset = () => {
    setCountry("");
    setState("");
    setCity("");
    setSubmitted(false);
  };

  return (
    <div className="container">
      <h1>🌍 Location Selector</h1>

      <div className="dropdowns">
        {/* Country */}
        <select
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setState("");
            setCity("");
            setSubmitted(false);
          }}
        >
          <option value="">Select Country</option>
          {Object.keys(data).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        {/* State */}
        {country && (
          <select
            value={state}
            onChange={(e) => {
              setState(e.target.value);
              setCity("");
              setSubmitted(false);
            }}
          >
            <option value="">Select State</option>
            {Object.keys(data[country]?.states || {}).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        )}

        {/* City */}
        {state && (
          <select
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              setSubmitted(false);
            }}
          >
            <option value="">Select City</option>
            {(data[country]?.states?.[state] || []).map((ct) => (
              <option key={ct} value={ct}>
                {ct}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Buttons */}
      {(country || state || city) && (
        <div className="btn-group">
          <button onClick={handleSubmit} className="submit-btn">
            Submit
          </button>
          <button onClick={handleReset} className="reset-btn">
            Reset
          </button>
        </div>
      )}

      {/* Result */}
      {submitted && (
        <div className="result">
          <h2>
            ✅ You selected: <span>{country}</span> → <span>{state}</span> →{" "}
            <span>{city}</span>
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;

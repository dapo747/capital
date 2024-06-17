import React, { useState } from 'react';

function Calculator() {
  const [salePrice, setSalePrice] = useState('');
  const [acb, setAcb] = useState('');
  const [expenses, setExpenses] = useState('');
  const [province, setProvince] = useState(''); // State to hold selected province
  const [capitalGain, setCapitalGain] = useState(null);
  const [taxableCapitalGain, setTaxableCapitalGain] = useState(null);

  const provinces = [
    { value: 'AB', label: 'Alberta' },
    { value: 'BC', label: 'British Columbia' },
    { value: 'MB', label: 'Manitoba' },
    { value: 'NB', label: 'New Brunswick' },
    { value: 'NL', label: 'Newfoundland and Labrador' },
    { value: 'NS', label: 'Nova Scotia' },
    { value: 'NT', label: 'Northwest Territories' },
    { value: 'NU', label: 'Nunavut' },
    { value: 'ON', label: 'Ontario' },
    { value: 'PE', label: 'Prince Edward Island' },
    { value: 'QC', label: 'Quebec' },
    { value: 'SK', label: 'Saskatchewan' },
    { value: 'YT', label: 'Yukon' },
  ];

  const handleProvinceChange = (event) => {
    setProvince(event.target.value);
  };

  const calculateCapitalGain = () => {
    // Your capital gain calculation logic here
    // Remember to incorporate the selected province (if necessary for your calculations)
  };

  return (
    <div>
      <h1>Capital Gains Calculator</h1>
      <div>
        <label>
          Sale Price:
          <input
            type="number"
            value={salePrice}
            onChange={(e) => setSalePrice(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Adjusted Cost Base (ACB):
          <input
            type="number"
            value={acb}
            onChange={(e) => setAcb(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Expenses:
          <input
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Province:
          <select value={province} onChange={handleProvinceChange}>
            <option value="">Select Province</option>
            {provinces.map((prov) => (
              <option key={prov.value} value={prov.value}>
                {prov.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button onClick={calculateCapitalGain}>Calculate</button>
      {capitalGain !== null && (
        <div>
          <h2>Results</h2>
          <p>Capital Gain: ${capitalGain.toFixed(2)}</p>
          <p>Taxable Capital Gain: ${taxableCapitalGain.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default Calculator;

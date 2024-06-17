import React, { useState } from 'react';

function Calculator() {
  const [salePrice, setSalePrice] = useState('');
  const [acb, setAcb] = useState('');
  const [expenses, setExpenses] = useState('');
  const [capitalGain, setCapitalGain] = useState(null);
  const [taxableCapitalGain, setTaxableCapitalGain] = useState(null);

  const calculateCapitalGain = () => {
    const sale = parseFloat(salePrice);
    const cost = parseFloat(acb);
    const exp = parseFloat(expenses);

    if (!isNaN(sale) && !isNaN(cost) && !isNaN(exp)) {
      const gain = sale - cost - exp;
      const taxableGain = gain * 0.5;

      setCapitalGain(gain);
      setTaxableCapitalGain(taxableGain);
    } else {
      alert('Please enter valid numbers');
    }
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

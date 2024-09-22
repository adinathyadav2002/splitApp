import React, { useState } from "react";
import Button from "./Button";

export default function SplitBill({ name, manageSplit }) {
  const [billAmount, setBillAmount] = useState("");
  const [expence, setExpence] = useState("");
  const [payer, setPayer] = useState("You");

  function handleSubmit(e) {
    e.preventDefault();
    if (billAmount === "" || billAmount === "0") return;
    if (payer === "You") {
      manageSplit(name, Number(expence));
    } else if (payer === name) {
      manageSplit(name, -1 * Number(expence));
    }
  }

  return (
    <div className="split-bill">
      <h3>SPLIT THE BILL WITH {name.toUpperCase()}</h3>
      <form>
        <div>
          <label htmlFor="billValue">💵 Bill Value</label>
          <input
            type="number"
            id="billValue"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="myExpense">💹 Your Expence</label>
          <input
            type="number"
            id="myExpense"
            value={expence}
            onChange={(e) => setExpence(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="otherExpense">
            💹 {name[0].toUpperCase() + name.slice(1) + "'s"} Expence
          </label>
          <input
            type="number"
            id="otherExpense"
            value={billAmount - expence}
            disabled
          />
        </div>
        <div>
          <label htmlFor="billPayer">💳 Who is paying the bill?</label>
          <select
            id="billPayer"
            value={payer}
            onChange={(e) => setPayer(e.target.value)}
          >
            <option value={name}>
              {name[0].toUpperCase() + name.slice(1)}
            </option>
            <option value={"You"}>You</option>
          </select>
        </div>
        <Button handleClick={handleSubmit}>Split Bill</Button>
      </form>
    </div>
  );
}

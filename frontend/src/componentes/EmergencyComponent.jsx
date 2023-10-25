import React, { useState } from "react";
import LoanNav from "../componentes/LoanNav";

const EmergencyLoanForm = () => {
  const [Amount, setAmount] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle the form submission logic here
    console.log("Submitted:", Amount);
  };

  return (
   
   <>
   <LoanNav />
     <div className="max-w-md mt-12 mx-auto p-6 text-white bg-blue-700 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center ">Emergency Loan Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="Amount" className="block  font-bold mb-2 ">
            Required Amount
          </label>
          <input
            type="text"
            id="Amount"
            className="w-full p-2 border text-gray-800 border-gray-300 rounded"
            placeholder="Enter Amount"
            value={Amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded w-full hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
   </>
  );
};

export default EmergencyLoanForm;

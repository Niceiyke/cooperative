import React, { useState } from "react";

const ContributionForm = () => {
  const [oldAmount, setOldAmount] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [commencementDate, setCommencementDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle the form submission logic here
    console.log("Submitted:", oldAmount, newAmount, commencementDate);
  };

  return (
    <div className="max-w-md mt-12 mx-auto p-6 text-white bg-blue-700 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center ">Contribution Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="oldAmount" className="block  font-bold mb-2 ">
            Old Amount
          </label>
          <input
            type="text"
            id="Old Amount"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter Old Amount"
            value={oldAmount}
            onChange={(e) => setOldAmount(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newAmount" className="block  font-bold mb-2">
            New Amount
          </label>
          <input
            type="text"
            id="New Amount"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter New Amount"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="commencementDate" className="block font-bold mb-2">
            Commencement Date
          </label>
          <input
            type="date"
            id="commencement Date"
            className="w-full p-2 border border-gray-300 rounded"
            value={commencementDate}
            onChange={(e) => setCommencementDate(e.target.value)}
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
  );
};

export default ContributionForm;

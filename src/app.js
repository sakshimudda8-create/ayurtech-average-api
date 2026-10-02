const express = require("express");

const app = express();

app.use(express.json());

let numbers = [];

/**
 * Calculates the average of the provided numbers.
 *
 * @param {number[]} values - Array of numbers.
 * @returns {number} The calculated average.
 */

function calculateAverage(values) {
  const sum = values.reduce((total, value) => total + value, 0);
  return sum / values.length;
}

/**
 * Adds a number and returns the average of all submitted numbers.
 *
 * @route POST /average
 * @param {Object} req - Express request object.
 * @param {Object} req.body - Request body.
 * @param {number} req.body.number - Number to add.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response containing the current average.
 */

app.post("/average", (req, res) => {
  const { number } = req.body || {};

  if (typeof number !== "number" || !Number.isFinite(number)) {
    return res.status(400).json({
      error: "Please provide a valid number",
    });
  }

  numbers.push(number);

  const average = calculateAverage(numbers);

  return res.status(200).json({
    average,
  });
});

function resetNumbers() {
  numbers = [];
}

module.exports = {
  app,
  calculateAverage,
  resetNumbers,
};
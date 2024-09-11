import React from "react";

function CurrencyFormat() {
  if (typeof amount !== "number" || isNaN(amount)) {
    return null;
  }

  const formattedAmount = `$${amount.toFixed(2)}`;

  return <span>{formattedAmount}</span>;
}

export default CurrencyFormat;

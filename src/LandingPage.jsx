import React from "react";

function LandingPage() {
  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <h1 style={{ fontSize: "2.8rem", color: "#36836d" }}>MicroBudget Buddy</h1>
      <h2 style={{ fontWeight: "normal", color: "#40606f", margin: "1rem 0" }}>
        Empower Your Wallet, Protect Our Planet
      </h2>
      <p style={{ maxWidth: 540, margin: "1.2rem auto 2.2rem", fontSize: "1.2rem", color: "#3d4147" }}>
        Take control of your spending, unlock eco-friendly habits, and see how small budgeting changes can make a big difference for you and the Earth.
      </p>
      <button
        style={{
          background: "#70c48c",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "1.1rem",
          padding: "0.7em 2.5em",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(56,131,109,0.13)",
        }}
        onClick={() => window.location.href = "/budget"} // Change to your next page
      >
        Get Started
      </button>
      <div style={{ marginTop: "2.5rem", fontSize: "1.1rem", color: "#709bbc" }}>
        <span style={{ margin: "0 1.5em" }}>🌱 Promotes sustainable choices</span>
        <span style={{ margin: "0 1.5em" }}>💸 Maximizes your impact</span>
        <span style={{ margin: "0 1.5em" }}>🏆 Supports SDG 12 &amp; SDG 13</span>
      </div>
    </div>
  );
}

export default LandingPage;

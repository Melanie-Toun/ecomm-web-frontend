// Pricing.jsx

import React from "react";

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5em",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1.2em",
    color: "#666",
    marginBottom: "40px",
  },
  plans: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  plan: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    width: "250px",
    marginBottom: "20px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  planHeader: {
    fontSize: "1.5em",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  price: {
    fontSize: "2em",
    margin: "10px 0",
    color: "#007BFF",
  },
  featureList: {
    listStyleType: "none",
    padding: 0,
    margin: "10px 0",
    textAlign: "left",
  },
  feature: {
    marginBottom: "8px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1em",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      price: "$10/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      title: "Pro",
      price: "$30/month",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      title: "Enterprise",
      price: "$50/month",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Pricing Plans</h1>
      <p style={styles.description}>
        Choose the plan that suits your needs. Upgrade, downgrade, or cancel
        anytime.
      </p>
      <div style={styles.plans}>
        {plans.map((plan, index) => (
          <div key={index} style={styles.plan}>
            <h2 style={styles.planHeader}>{plan.title}</h2>
            <p style={styles.price}>{plan.price}</p>
            <ul style={styles.featureList}>
              {plan.features.map((feature, i) => (
                <li key={i} style={styles.feature}>
                  {feature}
                </li>
              ))}
            </ul>
            <button style={styles.button}>Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
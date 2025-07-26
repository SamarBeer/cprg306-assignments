import React from 'react';

export default function Item({ item }) {
  const { name, quantity, category } = item;

  return (
    <li style={styles.item}>
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.detail}>Quantity: {quantity}</p>
      <p style={styles.detail}>Category: {category}</p>
    </li>
  );
}

const styles = {
  item: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "12px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  name: {
    fontSize: "18px",
    margin: "0 0 8px",
    color: "#222",
  },
  detail: {
    fontSize: "14px",
    margin: 0,
    color: "#666",
  },
};

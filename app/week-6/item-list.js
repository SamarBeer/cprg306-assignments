import React, { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div style={styles.container}>
      <div style={styles.buttonGroup}>
        <button
          onClick={() => setSortBy("name")}
          style={{
            ...styles.button,
            ...(sortBy === "name" ? styles.activeButton : {}),
          }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          style={{
            ...styles.button,
            ...(sortBy === "category" ? styles.activeButton : {}),
          }}
        >
          Sort by Category
        </button>
      </div>

      <ul style={styles.list}>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  buttonGroup: {
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    marginRight: "10px",
    backgroundColor: "#eee",
    color: "#333",
    border: "1px solid #999",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  activeButton: {
    backgroundColor: "#333",
    color: "#fff",
  },
  list: {
    listStyleType: "none",
    paddingLeft: 0,
  },
};

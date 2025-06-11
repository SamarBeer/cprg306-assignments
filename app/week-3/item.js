import React from 'react';

export default function Item(props) {
    const { name, quantity, category } = props;
    return (
        <li style={{padding: "0 0 10px 0"}}>
            <h2>{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </li>
    );
}

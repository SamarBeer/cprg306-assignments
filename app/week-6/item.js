import React from 'react';

export default function Item(props) {
    const { name, quantity, category } = props;
    return (
        <li style={{padding: "0 0 10px 0"}}>
            <strong className="capitalize">{name}</strong> — {quantity} in {category}

        </li>
    );
}

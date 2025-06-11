'use client';
import React from 'react';
import ItemList from './item-list.js';
export default function Page() {
  return (
    <div style={{padding:"25px 0 0 25px"}}>
      <h1 style={{fontWeight:"bold", fontSize:"36px"}}>Shopping List</h1>
      <ItemList />
    </div>
  );
}
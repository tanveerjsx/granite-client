import React from 'react';
import './style.css';

const Categories = () => {
  return (
    <>
      <span>Categories</span>
      <ul className="CategoryList">
        <li>
          <span>Accessories</span>
          <ul>
            <li>Handbags</li>
            <li>Shoes</li>
            <li>Watches</li>
          </ul>
        </li>
        <li>
          <span>Shirt & Tops</span>
        </li>
        <li>
          <span>Swimsuits</span>
        </li>
      </ul>
    </>
  );
};

export default Categories;

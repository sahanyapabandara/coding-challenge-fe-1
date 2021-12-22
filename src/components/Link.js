import React from "react";

const Link = ({ filters, selectedId, onClick }) => (
  <ul className="filters">
    {filters.map((filterItem, index) => (
      <li key={index}>
        <label>
          <input
            type="radio"
            name="filterTodo"
            value={filterItem.id}
            checked={filterItem.id === selectedId}
            onClick={() => onClick(filterItem.id)}
            readOnly
          />
          {filterItem.name}
        </label>
      </li>
    ))}
  </ul>
);

export default Link;

import React from "react";

const TodoList = ({ todos, onClick }) => (
  <ul className="todos">
    {todos.map((todo, index) => (
      <li
        className={`todos__item todos__item_${todo.completed && "checked"}`}
        key={index}
      >
        <input
          type="checkbox"
          onClick={() => onClick(todo.id)}
          checked={todo.completed}
          onClick={() => onClick(todo.id)}
          readOnly
        ></input>
        {todo.title}
      </li>
    ))}
  </ul>
);

export default TodoList;

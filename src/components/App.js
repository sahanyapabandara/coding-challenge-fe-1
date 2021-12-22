import React from "react";
import AddTodo from "../containers/AddTodo";
import FilterLink from "../containers/FilterLink";
import DisplayTodoList from "../containers/DisplayTodoList";

const App = () => (
  <div>
    <AddTodo />
    <FilterLink />
    <DisplayTodoList />
  </div>
);

export default App;

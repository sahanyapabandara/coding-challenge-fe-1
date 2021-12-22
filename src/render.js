function renderApp(input, filter, todoList) {
  return `<div>${input}${filter}${todoList}</div>`;
}

function renderForm() {
  return `<div class="form">
    <input type="text" data-element="addTodoInput">
    <button data-element="addTodoButton">Add</button>
  </div>`;
}

function renderTodos(todoItems) {
  return `<ul class="todos">${todoItems}</ul>`;
}

function renderFilters(renderFilters) {
  return `<ul class="filters">${renderFilters}</ul>`;
}

function renderTodoItem(todo) {
  return `<li class="${`todos__item todos__item_${
    todo.completed && "checked"
  }`}">
    <input type="checkbox" data-element="toggleTodo" data-id="${todo.id}" ${
    todo.completed ? " checked" : ""
  }>
    ${todo.title}
  </li>`;
}

function renderFilterItem(filterItem, selectedFilterId) {
  return `<li>
        <label>
          <input
            type="radio"
            name="filterTodo"
            data-element="filterTodo"
            value="${filterItem.id}"
            ${filterItem.id === selectedFilterId ? "checked" : ""}
          />
          ${filterItem.name}
        </label>
      </li>`;
}

export default (element, state) => {
  const selectedFilterId = state.selectedFilterId;

  const todoFilters = state.filters
    .map((item) => renderFilterItem(item, selectedFilterId))
    .join("");

  let filterArray = [];

  if (selectedFilterId === 1) {
    filterArray = state.todos.filter((item) => !item.completed);
  } else if (selectedFilterId === 2) {
    filterArray = state.todos.filter((item) => item.completed);
  } else {
    filterArray = state.todos;
  }

  const todoItems = filterArray.map(renderTodoItem).join("");

  element.innerHTML = renderApp(
    renderForm(),
    renderFilters(todoFilters),
    renderTodos(todoItems)
  );
};

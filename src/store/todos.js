const uniqueId = {
  currentId: 0,
  get() {
    this.currentId += 1;
    return this.currentId;
  },
};

export const initialState = {
  selectedFilterId: 0,
  todos: [
    {
      id: uniqueId.get(),
      title: "JS-101",
      completed: true,
    },
    {
      id: uniqueId.get(),
      title: "JS-102",
      completed: false,
    },
    {
      id: uniqueId.get(),
      title: "JS-201",
      completed: false,
    },
    {
      id: uniqueId.get(),
      title: "JS-202",
      completed: false,
    },
  ],
  filters: [
    {
      id: 0,
      name: "Show All",
    },
    {
      id: 1,
      name: "Show Open",
    },
    {
      id: 2,
      name: "Show Closed",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state.todos.push({
        id: uniqueId.get(),
        title: action.title,
        completed: false,
      });
      break;
    case "TOGGLE":
      for (let todo of state.todos) {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
          break;
        }
      }
      break;
    case "FILTER_ACTION":
      state.selectedFilterId = action.id;
      break;
  }
};

import { connect } from "react-redux";
import { toggle } from "../actions";
import TodoList from "../components/TodoList";

const filterTodos = (todos, filterId) => {
  if (filterId === 1) {
    return todos.filter((item) => !item.completed);
  } else if (filterId === 2) {
    return todos.filter((item) => item.completed);
  } else {
    return todos;
  }
};

const mapStateToProps = (state) => ({
  todos: filterTodos(state.task.todos, state.task.selectedFilterId),
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(toggle(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

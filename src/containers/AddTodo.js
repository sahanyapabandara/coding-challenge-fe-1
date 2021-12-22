import React from "react";
import { connect } from "react-redux";
import { add } from "../actions";

const AddTodo = ({ dispatch }) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    dispatch(add(value));
    setValue("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setValue(e.target.value)} value={value} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);

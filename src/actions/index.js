export const toggle = (id) => ({
  type: "TOGGLE",
  id,
});

export const add = (title) => ({
  type: "ADD",
  title,
});

export const todoFilterActions = (id) => ({
  type: "FILTER_ACTION",
  id,
});

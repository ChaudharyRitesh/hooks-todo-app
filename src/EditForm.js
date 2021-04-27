import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./Hooks/unseInputState";

export default function EditForm({ task, id, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
      style={{ margin: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullwidth
        autoFocus
      />
    </form>
  );
}

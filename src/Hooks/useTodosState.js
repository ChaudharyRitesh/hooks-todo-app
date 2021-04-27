import { useState } from "react";
import * as uuid from "uuid";

// eslint-disable-next-line import/no-anonymous-default-export
export default initialVal => {
  const [todos, setTodos] = useState(initialVal);

  return {
    todos,
    addTodo: newTodoText => {
      setTodos([
        ...todos,
        { id: uuid.v4(), task: newTodoText, completed: false },
      ]);
    },
    removeTodo: todoId => {
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(updatedTodos);
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );

      setTodos(updatedTodos);
    },
  };
};

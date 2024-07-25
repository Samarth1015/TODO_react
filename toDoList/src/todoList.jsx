import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [task, setTask] = useState([]);
  let [newtask, setNewtask] = useState("");
  console.log(task);
  function upperCaseAll() {
    setTask((prevTask) => {
      return prevTask.map((Task) => {
        console.log("helooooo" + Task.taskName);
        return { ...Task, taskName: Task.taskName.toUpperCase() };
      });
    });
  }
  function dltTask(id) {
    setTask((prevTask) => {
      return prevTask.filter((prevTask) => {
        return prevTask.id != id;
      });
    });
  }
  function Add() {
    setTask([...task, { taskName: newtask, id: uuidv4(), remark: false }]);
    setNewtask("");
  }
  let taskName = (event) => {
    setNewtask(() => {
      return event.target.value;
    });
  };
  function done(id) {
    setTask((prevTask) => {
      return prevTask.map((taski) => {
        if (taski.id == id) {
          console.log("done");
          return { ...taski, remark: true };
        } else {
          return taski;
        }
      });
    });
  }

  return (
    <div>
      <input
        placeholder="Write your Task"
        value={newtask}
        onChange={taskName}
      ></input>
      <button onClick={Add}>Add Task</button>
      <hr />
      <ul>
        {task.map((todos) =>
          todos.remark === false ? (
            <li key={todos.id}>
              {todos.taskName}{" "}
              <button onClick={() => dltTask(todos.id)}>delete</button>
              <button onClick={() => done(todos.id)}>Mark as done</button>
            </li>
          ) : (
            <li key={todos.id} style={{ textDecoration: "line-through" }}>
              {todos.taskName}{" "}
              <button onClick={() => dltTask(todos.id)}>delete</button>
            </li>
          )
        )}
      </ul>

      <button onClick={upperCaseAll}>Capitalize</button>
    </div>
  );
}

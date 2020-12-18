import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const tasks = props.tasks.map((task) => (
    <Task
      key={props.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <React.Fragment>
      <div className="active">
        <h1>Zadania do zrobienia</h1>
        {tasks}
      </div>
      <hr />
      <div className="done">
        <h3>Zadania zrobione (0)</h3>
      </div>
    </React.Fragment>
  );
};

export default TaskList;

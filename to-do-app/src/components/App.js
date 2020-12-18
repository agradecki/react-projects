import { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać wreszcie w Wiedźmina 3",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "wynieść śmieci",
        date: "2018-05-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "nakarmić psa",
        date: "2018-10-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "umyć auto",
        date: "2018-12-15",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "isć po zakupy",
        date: "2015-11-15",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "pomalować dom",
        date: "2016-01-15",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 6,
        text: "przecytać książkę",
        date: "2019-09-19",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex((task) => task.id === id);
    // tasks.splice(index, 1);
    //---------------------------------------------------------------------------- metoda nr 1
    // this.setState({
    //   tasks,
    // });

    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);

    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks]; // lub const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });

    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <div>
        <h1>TO DO APP</h1>
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;

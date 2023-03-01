import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import Footer from "../Footer";
import { Component } from "react";

export default class App extends Component {
  state = {
    todoData: [
      {label: 'Drink coffee', id: 1},
      {label: 'Drink tea',  id: 2},
      {label: 'Drink pepsi', id: 3},
    ]
  }

  deleteTaskFromList = (id) => {
    this.setState(({todoData}) => {
      const index = todoData.findIndex((el) => el.id === id);
      return {
        todoData: [...todoData.slice(0, index), ...todoData.slice(index+1)],
      }

    });
  }

  render() {
    const {todoData} = this.state;
    return (
      <section className="todoapp">
        <NewTaskForm />
        <section className="main">
          <TaskList 
            todos={todoData}
            onDelete = {this.deleteTaskFromList}
          />
          <Footer />
        </section>
      </section>
    );
  }
}
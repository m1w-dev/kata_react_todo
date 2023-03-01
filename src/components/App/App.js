import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import Footer from "../Footer";
import { Component } from "react";

export default class App extends Component {

  currentId = 0;

  state = {
    todoData: [
      this.createTaskConfig('Drink coffee'),
      this.createTaskConfig('Drink tea'),
      this.createTaskConfig('Drink pepsi'),
    ],
    currentFilter: 'all',
  }

  createTaskConfig(label) {
    return {
      label,
      done: false,
      display: true,
      id: this.currentId++,
    }
  }

  changeTaskStatus = (id) => {
    this.setState(({todoData}) => {
      const index = todoData.findIndex((el) => el.id === id);
      const updatedItem = {...todoData[index], done: !todoData[index].done };
      return {
        todoData: [...todoData.slice(0, index), updatedItem, ...todoData.slice(index+1)],
      }
    });    
  }

  changeTaskLabel = (id, newLabel) => {

  }

  createTask = (label) => {
    this.setState(({todoData}) => {
      return {
        todoData: [this.createTaskConfig(label), ...todoData],
      }
    })
  }

  deleteTaskFromList = (id) => {
    this.setState(({todoData}) => {
      const index = todoData.findIndex((el) => el.id === id);
      return {
        todoData: [...todoData.slice(0, index), ...todoData.slice(index+1)],
      }

    });
  }

  tasksFilter = (filterMode) => {
    this.setState({currentFilter: filterMode});

    this.setState((({todoData}) => {
      return {
        todoData: todoData.map((task) => {
          let display = true;
          switch (filterMode) {
            case 'active':
              display = task.done === false ? true : false;
              break;
            case 'completed':
              display = task.done === true ? true : false;
              break;
            default: 
              display = true;
              break;
          }
          return {...task, display: display}
        })
      };
    }));
  }

  clearDone = () => {
    this.setState(({todoData}) => {
      return {
        todoData: [ ...todoData.filter((el) => el.done === false) ]
      }
    });
  }

  render() {
    const {todoData} = this.state;
    return (
      <section className="todoapp">
        <NewTaskForm createTask={this.createTask}/>
        <section className="main">
          <TaskList 
            todos={todoData}
            onDelete = {this.deleteTaskFromList}
            onChangeStatus = {this.changeTaskStatus}
          />
          <Footer 
            count = { todoData.filter((el) => el.done === false).length }
            filter = { this.tasksFilter }
            currentFilter = {this.state.currentFilter}
            clearDone = { this.clearDone }
          />
        </section>
      </section>
    );
  }
}
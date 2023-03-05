import { Component } from 'react';

import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Footer from '../Footer';

export default class App extends Component {
  currentId = 0;

  state = {
    todoData: [],
    currentFilter: 'all',
  };

  createTaskConfig(label) {
    return {
      label,
      done: false,
      display: true,
      id: this.currentId++,
    };
  }

  changeTaskStatus = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      const updatedItem = { ...todoData[index], done: !todoData[index].done };
      return {
        todoData: [...todoData.slice(0, index), updatedItem, ...todoData.slice(index + 1)],
      };
    });
    this.tasksFilter(this.state.currentFilter);
  };

  createTask = (label) => {
    this.setState(({ todoData }) => {
      return {
        todoData: [this.createTaskConfig(label), ...todoData],
      };
    });
  };

  deleteTaskFromList = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      return {
        todoData: [...todoData.slice(0, index), ...todoData.slice(index + 1)],
      };
    });
  };

  tasksFilter = (filterMode) => {
    this.setState({ currentFilter: filterMode });

    this.setState(({ todoData }) => {
      return {
        todoData: todoData.map((task) => {
          let display = true;
          if (filterMode === 'active') display = !task.done;
          if (filterMode === 'completed') display = task.done;
          return { ...task, display: display };
        }),
      };
    });
  };

  clearDone = () => {
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData.filter((el) => el.done === false)],
      };
    });
  };

  render() {
    const { todoData } = this.state;
    return (
      <section className="todoapp">
        <NewTaskForm createTask={this.createTask} />
        <section className="main">
          <TaskList todos={todoData} onDelete={this.deleteTaskFromList} onChangeStatus={this.changeTaskStatus} />
          <Footer
            count={todoData.filter((el) => el.done === false).length}
            filter={this.tasksFilter}
            currentFilter={this.state.currentFilter}
            clearDone={this.clearDone}
          />
        </section>
      </section>
    );
  }
}

import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import Footer from "../Footer";


const todoData = [
    {label: 'Drink coffee', complete: false, created: 123},
    {label: 'Drink tea', complete: false, created: 456},
    {label: 'Drink pepsi', complete: true, created: 789},
  ];

const App = () => {
    return (
      <section className="todoapp">
        <NewTaskForm />
        <section className="main">
          <TaskList todos={todoData} />
          <Footer />
        </section>
      </section>
    );
  }

export default App;
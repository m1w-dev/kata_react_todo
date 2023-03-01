import TasksFilter from "../TasksFilter";

const Footer = ({count, clearDone, filter, currentFilter}) => {
    return (
       <footer className="footer">
          <span className="todo-count">{count} items left</span>
          <TasksFilter filter={(filterMode) => {filter(filterMode)}} currentFilter={currentFilter}/>
          <button className="clear-completed" onClick={clearDone}>Clear completed</button>
        </footer>
    );
}

export default Footer;
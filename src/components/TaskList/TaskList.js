import Task from "../Task";

const TaskList = ({ todos }) => {
    
    const items = todos.map((item) => { 
        return (
            <Task 
                t={item}
                key={item.created}
                complete={item.complete} 
            />
        ); 
    });

    return (
        <ul className="todo-list">
            {items}
        </ul>
    );
}

export default TaskList;
import Task from "../Task";

const TaskList = ({ todos, onDelete }) => {
    
    const items = todos.map((item) => { 
        const {id, label} = item;
        return (
            <Task 
                label = {label}
                key = {id}
                onDelete = { () => onDelete(id) }
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
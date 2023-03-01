import Task from "../Task";

const TaskList = ({ todos, onDelete, onChangeStatus }) => {
    
    const items = todos.map((item) => { 
        const {id, label, done, display} = item;
        if (!display) return null;
        return (
            <Task 
                label = {label}
                key = {id}
                done = {done}
                onDelete = { () => onDelete(id) }
                onChangeStatus = { () => onChangeStatus(id) }
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
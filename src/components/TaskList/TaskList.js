import propTypes from 'prop-types';

import Task from '../Task';

const TaskList = ({ todos, onDelete, onChangeStatus }) => {
  const items = todos.map((item) => {
    const { id, label, done, display } = item;
    if (!display) return null;
    return (
      <Task
        label={label}
        key={id}
        done={done}
        onDelete={() => onDelete(id)}
        onChangeStatus={() => onChangeStatus(id)}
      />
    );
  });

  return <ul className="todo-list">{items}</ul>;
};

TaskList.defaultProps = {
  todos: [],
  onDelete: () => {},
  onChangeStatus: () => {},
};

TaskList.propTypes = {
  todos: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string,
      done: propTypes.bool,
      display: propTypes.bool,
      id: propTypes.any,
    })
  ),
  onDelete: propTypes.func,
  onChangeStatus: propTypes.func,
};

export default TaskList;

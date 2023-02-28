import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Task = ({t}) => {
    return (
        <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox"/>
              <label>
                <span className="description">{t.label}</span>
                <span className="created">
                  {`created ${formatDistanceToNow(new Date(), {includeSeconds: true})} ago`}</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
          </li>

    );
}

export default Task;
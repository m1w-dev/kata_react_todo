import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {Component} from 'react';


export default class Task extends Component {

  state = {
    done: false,
    edited: false,
    label: this.props.label,
  }

  changeTaskStatus = () => {
    this.setState((state) => {
      return {done: !state.done}
    })
  }

  editTaskLabel = () => {
    console.log('edit');
  }

  render() {
    const {done, edited, label} = this.state;

    let classNames = '';
    classNames += done ? ' completed' : '';
    classNames += edited ? ' editing' : '';
    
    return (
        <li className={classNames}>
            <div className="view">
              <input className="toggle" type="checkbox" onClick={ this.changeTaskStatus }/>
              <label>
                <span className="description">{label}</span>
                <span className="created">
                  {`created ${formatDistanceToNow(new Date(), {includeSeconds: true})} ago`}</span>
              </label>
              <button className="icon icon-edit" onClick={ this.editTaskLabel }></button>
              <button className="icon icon-destroy" onClick={ this.props.onDelete }></button>
            </div>
          </li>

    );
  }
}


import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {Component} from 'react';


export default class Task extends Component {

  state = {
    edited: false,
  }

  render() {
    const {edited} = this.state;
    const {done, label} = this.props;

    let classNames = '';
    classNames += done ? ' completed' : '';
    classNames += edited ? ' editing' : '';
    
    return (
        <li className={classNames}>
            <div className="view">
              <input className="toggle" type="checkbox" onClick={ this.props.onChangeStatus } checked={ done } readOnly/>
              <label>
                <span className="description">{label}</span>
                <span className="created">
                  {`created ${formatDistanceToNow(new Date(), {includeSeconds: true})} ago`}</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy" onClick={ this.props.onDelete }></button>
            </div>
          </li>

    );
  }
}


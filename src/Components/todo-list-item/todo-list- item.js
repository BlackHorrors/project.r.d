import React, {Component} from "react";
import './todo-list-item.css'


export default class TodoListItem extends Component {
    // state = {
    //     done: false,
    //     important: false
    // };

    // onMarkImportant = () => {
    //     this.setState(({important}) => {
    //         return {
    //             important: !important
    //         };
    //     });
    // };
    //
    // onLabelClick = () => {
    //     this.setState(({done}) => {
    //         return {
    //             done: !done
    //         };
    //     });
    // };

    render() {

        const {
            label, onDeleted,
            onToggleImportant,
            onToggleDone ,
            done,
            important
        } = this.props;

        // const {done, important} = this.state;
        let classNames = 'todo-list-item';
        if (done) {
            classNames += 'done';
        }
        if (important) {
            classNames += 'important';
        }


        return (
            <span className={`${classNames}`}>
            <span className="todo-list-item-label"
                  onClick={onToggleDone}>
                 {label}
            </span>
            <button type="button" className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation"
                   onClick={onToggleImportant}/></button>

            <button type="button" className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}>
                <i className="fa fa-trash-o"/></button>

        </span>
        )
    }
}

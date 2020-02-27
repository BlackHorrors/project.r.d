import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";


export default class App extends Component {
    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Create shot label'),
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Have a lunch'),
            this.createTodoItem('Create shot label')
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId
        }
    }
    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newArray
            };
        });
    };
    onToggleImportant = (id) => {
        console.log("toggle important", id)
    };
    onToggleDone = (id) => {
        this.setState((todoData)=>{
            const idx = todoData.findIndex((el)=>el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem , done: !oldItem.done};
             const newArray =[
                 ...todoData.slice(0, idx),
                 newItem,
                 ...todoData.slice(idx + 1)
             ];
              return {
               todoData:  newArray
              }
        });
        console.log('Toggle done', id)
    };
    addItem = (text) => {
        //generate id
        const newItem = this.createTodoItem(text);
        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArr
            }
        });
    };


    render() {
        const doneCount = this.state.todoData.filter((el)=>el.done.length);
        const  todoCount = this.state.todoData.length - doneCount;
        return (
            <div className="todo-app">

                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todos={this.state.todoData}
                          onDeleted={(id) => this.deleteItem(id)}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}/>
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
};


//When used together with the <label> element, the for attribute specifies which form element a label is bound to.
// When used together with the <output> element, the for attribute specifies the relationship between the result of the calculation,
// and the elements used in the calculation.


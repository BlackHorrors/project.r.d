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
            {label: 'Drink coffee', important: false, id: 1},
            {label: 'Create to React App ', important: true, id: 2},
            {label: ' Have a lunch ', important: true, id: 3}
        ]
    };
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
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
    //  onToggleImportant (id) => {
    //   console.log("toggle inportant" id )
    //  };
    //  onToggleDone (id) =>{
    //    console.log( 'Toggle done')
    // };
    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };
        this.setState(({ todoData }) => {
        const newArr = [
            ...todoData,
                newItem
            ];
            return{
               todoData:newArr
            }
                });
    };

    render() {
        return (
            <div className="todo-app">

                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todos={this.state.todoData}
                          onDeleted={(id) =>
                              this.deleteItem(id)
                              // onToggleImportant={this.onToggleImportant}
                              // onToggleDone={this.onToggleDone}}/>
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
};


//When used together with the <label> element, the for attribute specifies which form element a label is bound to.
// When used together with the <output> element, the for attribute specifies the relationship between the result of the calculation,
// and the elements used in the calculation.


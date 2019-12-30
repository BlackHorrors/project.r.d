import React from "react";
import ReactDOM from "react-dom"
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";


const App = () => {

    const todoData = [
        {label: 'Drink coffee', important: false, id: 1},
        {label: 'Create to React App ', important: true, id: 2},
        {label: ' Have a lunch ', important: true, id: 3}
    ];

    return (
        <div className="todo-app">

            {/*<span>{(new Date().toString())}</span>*/}
            <AppHeader toDo={1} done={3}/>
            <ItemStatusFilter/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <TodoList todos={todoData}/>
            </div>
        </div>
    )
};


//When used together with the <label> element, the for attribute specifies which form element a label is bound to.
// When used together with the <output> element, the for attribute specifies the relationship between the result of the calculation,
// and the elements used in the calculation.
export default App;



import React from "react";
import "./app-header.css"
const AppHeader = ({toDo , done}) => {
    return (
        <div className="app-header f-flex">
        <h1>My Todo List</h1>
            <h2>{toDo} more to  somesing  do , {done} done </h2>
        </div>
    )
};
export default AppHeader;

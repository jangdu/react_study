import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1;    // 차지할영역 = 전부
    padding: 20px 30px;
    padding-bottom: 48px;
    overflow-y: auto;
    //background-color: gray; // 임시
`;



function TodoList () {
    const todos = useTodoState();

    return (
    <TodoListBlock>
        {todos.map(todo => (
            <TodoItem key={todo.id} id={todo.id} done={todo.done} text={todo.text}/>
        ))}
    </TodoListBlock>)
}

export default TodoList;
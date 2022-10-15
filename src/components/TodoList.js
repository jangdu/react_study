import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1;    // 차지할영역 = 전부
    padding: 20px 30px;
    padding-bottom: 48px;
    overflow-y: auto;
    //background-color: gray; // 임시
`;

function TodoList () {
    return (<TodoListBlock>
        <TodoItem id={1} done={true} text="project"/>
        <TodoItem id={2} done={true} text="component"/>
        <TodoItem id={3} done={false} text="Context"/>
        <TodoItem id={4} done={false} text="feat"/>
    </TodoListBlock>)
}

export default TodoList;
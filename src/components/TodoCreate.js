import React, { useState } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";

const CircleButton = styled.button`
    background: #38d9a9;
    &:hover{
        background: #63e6be;
    }
    &:active {
        background: #20c997;
    }
`;

const InsertFormPositioner = styled.div`

`;

const InsertForm = styled.form`

`;

const Input = styled.input`

`;

function TodoCreate(){
    // useState(초기값): 컴포넌트 동적상태관리하는 react hook
    // open: 초기값, setOpen 변동값
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm>
                        <Input autoFocus placeholder="할일 입력후 Enter" />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    )
}

export default TodoCreate;
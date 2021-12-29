import React, {useState} from 'react'
import styled from 'styled-components'
import { Container as TaskContainer, TextStyle as TaskTextStyle } from './Task'
import { useRecoilCallback, useRecoilState } from 'recoil'
import { tasksState } from './Tasks'
import { taskState } from './Task'

const InsertInput = styled.input`
    width: 100%;
    height: 100%;
    appearance: none;
    border: 0;
    background-color: transparent;
    outline: none;
    -webkit-appearance: textfield;
    ${TaskTextStyle};

    ::-webkit-search-decoration,
    ::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }
`

export const Input: React.FC = () => {
    const [label, setLabel] = useState('');
    const [tasks] = useRecoilState(tasksState);

    const insertTask = useRecoilCallback(({set}) => {
        return (label: string) => {
            const newTaskId = tasks.length;
            set(tasksState, [...tasks, tasks.length]);
            set(taskState(newTaskId), {
                label,
                complete: false,
            })
        }
    })

    return (
        <TaskContainer>
            <InsertInput
                placeholder="Insert a new task..."
                type="search"
                autoComplete="off"
                value={label}
                onChange={({currentTarget}) => {
                    setLabel(currentTarget.value)
                }}
                onKeyUp={({keyCode}) => {
                    if (keyCode === 13) {
                        // Insert new task
                        // setTasks([...tasks, tasks.length]);
                        insertTask(label);
                        console.log('new task:', label);
                        setLabel('');
                    }
                }}
            />
        </TaskContainer>
    )
}

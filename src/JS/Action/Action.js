import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionsType/ActionsType"


export const addTask = (newTask) => {
    return {
        type : ADD_TASK,
        paylod : newTask
    }
}

export const deleteTask = (id) => {
    return {
        type : DELETE_TASK,
        paylod : id
    }
}

export const editTask = (id , newTask) => {
    return {
        type : EDIT_TASK,
        paylod : {id , newTask}
    }
}

export const doneTask = (id) => {
    return {
        type : DONE_TASK,
        paylod : id
    }
}
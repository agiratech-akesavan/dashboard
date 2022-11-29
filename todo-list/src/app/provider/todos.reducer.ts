import { createFeatureSelector, createReducer,createSelector,on } from "@ngrx/store";
import { action } from "./todos.action";
import { TodoModel, todos } from "./todos.state";


export const todosReducer=createReducer(
    todos,
    on(action.addTodosAction,(state,action)=>{  
        console.log(...state,action.todos)
        return [...state,action.todos]
    }),
    on(action.deleteTodosAction,(state,todo)=>{
       const id=todo.todos.id
       const todos=state.filter((item)=>{
        return item.id != id
       })
       return [...todos]
    }),
    on(action.selectTodosAction,(state,action)=>{
        const index=state.findIndex((item)=>{
            return item.id == action.todos.id
        })
        const todos=[...state]
        todos.splice(index,1,action.todos);   
        return [...todos]
    }),
    on(action.editTodoAction,(state,action)=>{

        let index=state.findIndex((item)=>{
            return item.id ==action.todos.id
        })
        const todos=[...state]
        todos.splice(index,1,action.todos);   
        return [...todos]      
    })

);


export const todosSelector=createSelector(createFeatureSelector("todos"),
    (todos:TodoModel[]) => todos
)
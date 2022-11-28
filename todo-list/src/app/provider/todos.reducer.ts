import { createFeatureSelector, createReducer,createSelector,on } from "@ngrx/store";
import { action } from "./todos.action";
import { active, TodoModel, todos } from "./todos.state";


export const todosReducer=createReducer(
    todos,
    on(action.addTodosAction,(state,action)=>{  
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
);

// export const activeReducer=createReducer(
//     active,
//     on(action.activeTodosAction,(state)=>{
//         const active=state.filter(item=>{
//             if(!item.completed){
//                 return item
//             }
//         })
//         console.log(state)
//          return [...active]
//      })
// )
// export const todoActive=createSelector(createFeatureSelector("active"),(active:TodoModel[])=>active)

export const todosSelector=createSelector(createFeatureSelector("todos"),
    (todos:TodoModel[]) => todos
)
import { createAction,props } from "@ngrx/store";
import { TodoModel } from "./todos.state";



const addTodosAction = createAction("[TODO] ADD_TODO",props<{todos:TodoModel}>())
const deleteTodosAction = createAction("[TODO] DELETE_TODO",props<{todos:TodoModel}>())
const selectTodosAction = createAction("[TODO] SELECT_TODO",props<{todos:TodoModel}>())
const activeTodosAction = createAction("[TODO] ACTIVE_ TODO")
const editTodoAction = createAction("[TODO] EDIT_TODO",props<{todos:TodoModel}>())


export const action={addTodosAction,deleteTodosAction,selectTodosAction,activeTodosAction,editTodoAction}

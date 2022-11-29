import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { action } from '../provider/todos.action';
import { todosSelector } from '../provider/todos.reducer';
import { TodoModel } from '../provider/todos.state';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  @ViewChild("select") selecttag:ElementRef;
  @ViewChild("todoList") todolist:ElementRef;
  @ViewChild("add") addValue:ElementRef

  public todoInput:string;
  public arr:any=[];
  filterValue:any=[];

  public active:any;
  public completed:any;

  public todos:any=[]; 
  public todoValue:any=[];

  constructor( public store:Store) { }

  ngOnInit(): void {
    this.store.select(todosSelector).subscribe((state)=>this.todos=state)
  }


  addtodo(){
    if(this.addValue.nativeElement.value == 0){
      Swal.fire("Warning","Please Enter Work to Add in Todo-List","warning")
    }else{
    const todos=  {
      id:this.todos.length,
      completed:false,
      title:this.todoInput!,
      edit:false
    } as any
   this.store.dispatch(action.addTodosAction({todos})) 
    this.todoInput = ""
  }
  }

  delete(value:any){
    
    const todos:TodoModel={
      id:value,
      completed:this.todos.completed,
      title:this.todos.title,
      edit:false
    }

    this.store.dispatch(action.deleteTodosAction(action.deleteTodosAction({todos})))
    this.onChangeSelect(this.selecttag.nativeElement.value)

  }

  public parentSelector:boolean=false;

  onChangeStatus($event:any,todo:any){

    
    let value=$event.target.value;
  

    if(value === "false"){
      value = true
    }else{
      value = false
    }

    let todos={
      id:todo.id,
      completed:value,
      title:todo.title,
      edit:false
    }

    this.store.dispatch(action.selectTodosAction(action.selectTodosAction({todos})))

    if (this.selecttag.nativeElement.value == "active"){
      this.onChangeSelect(this.selecttag.nativeElement.value)
    }else if(this.selecttag.nativeElement.value == "completed"){
      this.onChangeSelect(this.selecttag.nativeElement.value)
    }
    
  }

  onChangeSelect(value:any){
    if(value == "all"){
      this.filterValue=[]
      this.store.select(todosSelector).subscribe((state)=>this.todos=state)
      this.todos.filter((item:any)=>{
        if(item.completed || !item.completed){
          this.filterValue.push(item)
        }
      })
      this.todos=this.filterValue
    }else if(value == "active"){
      this.filterValue=[]
      this.store.select(todosSelector).subscribe((state)=>this.todos=state)
      this.todos.filter((item:any)=>{
        if(!item.completed){
          this.filterValue.push(item)
        }
      })
      this.todos=this.filterValue
    }
    else if(value == "completed" ){
      this.filterValue=[]
      this.store.select(todosSelector).subscribe((state)=>this.todos=state)
      this.todos.filter((item:any)=>{
        if(item.completed){
          this.filterValue.push(item)
        }
      })
      this.todos=this.filterValue
    }
    }

    edit(value:any,todo){
      let todos={
        id:todo.id,
        completed:todo.completed,
        title:todo.title,
        edit:true
      }
      this.store.dispatch(action.editTodoAction(action.editTodoAction({todos})))  
    }

    save(value:any,todo:TodoModel){
      const todoTitle=this.todolist.nativeElement.value

      if(todoTitle.length == 0){
        this.delete(todo.id);
      }else{
        const todos={
          id:todo.id,
          completed:todo.completed,
          title:todoTitle,
          edit:false
        }
        this.store.dispatch(action.editTodoAction(action.editTodoAction({todos})))
      }
    }

}

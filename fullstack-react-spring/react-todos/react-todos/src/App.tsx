import { useState } from 'react';
import './App.css';
import { TodoTable } from './components/TodoTable';
import { NewTodoForm } from './components/NewTodoForm';
import TodoModel from "./models/TodoModel";

export const App = () => {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: '멍멍이 산책시키기', rowAssignee: 'SJ' },
    { rowNumber: 2, rowDescription: 'Home Network analysis', rowAssignee: 'IH' },
    { rowNumber: 3, rowDescription: '커피콩 구입하기', rowAssignee: 'SJ' },
    { rowNumber: 4, rowDescription: '속옷 구입하기', rowAssignee: 'SJ' }
  ]);

  const addTodo = (description: string, assignee: string) => {
    let rowNumber;
    if (todos.length > 0)
      rowNumber = todos[todos.length - 1]!.rowNumber + 1;
    else
      rowNumber = 1;

    const newTodo = new TodoModel(rowNumber, description, assignee);
    setTodos(todos => [...todos, newTodo]);
  };

  const deleteTodo = (deleteTodoRowNumber: number) => {
    setTodos(todos => todos.filter(todo => todo.rowNumber !== deleteTodoRowNumber));
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={ todos } deleteTodo={ deleteTodo }/>
          <button className="btn btn-primary" onClick={ () => setShowAddTodoForm(!showAddTodoForm) }>
            { showAddTodoForm ? 'Close New Todo' : 'New todo' }
          </button>
          { showAddTodoForm &&
            <NewTodoForm addTodo={ addTodo }/>
          }
        </div>
      </div>
    </div>
  );
}

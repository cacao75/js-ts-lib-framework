import { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: '멍멍이 산책시키기', rowAssignee: 'SJ' },
    { rowNumber: 2, rowDescription: 'Home Network analysis', rowAssignee: 'IH' },
    { rowNumber: 3, rowDescription: '커피콩 구입하기', rowAssignee: 'SJ' },
    { rowNumber: 4, rowDescription: '속옷 구입하기', rowAssignee: 'SJ' }
  ]);

  const addTodo = (description, assignee) => {
    let rowNumber;
    if (todos.length > 0)
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    else
      rowNumber = 1;

    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssignee: assignee
    };
    setTodos(todos => [...todos, newTodo]);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={ todos }/>
          <button className="btn btn-primary" onClick={ addTodo }>Add new todo</button>
          <NewTodoForm addTodo={ addTodo }/>
        </div>
      </div>
    </div>
  );
}

export default App;

import { TodoRowItem } from './TodoRowItem';
import TodoModel from '../models/TodoModel';

export const TodoTable = (props: {todos: TodoModel[], deleteTodo: Function}) => {
  return (
    <div>
      <table className="table table-hover">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assignee</th>
        </tr>
        </thead>
        <tbody>
        { props.todos.map((todo) => (
          <TodoRowItem key={ todo.rowNumber }
                       rowNumber={ todo.rowNumber }
                       rowDescription={ todo.rowDescription }
                       rowAssignee={ todo.rowAssignee }
                       deleteTodo={ props.deleteTodo }
          />
        )) }
        </tbody>
      </table>
    </div>
  );
}

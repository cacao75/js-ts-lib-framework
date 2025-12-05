import { useState } from 'react';

export const NewTodoForm = (props: { addTodo: Function }) => {
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');

  const submitTodo = () => {
    if (description !== '' && assignee !== '') {
      props.addTodo(description, assignee);
      setDescription('');
      setAssignee('');
    }
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input type="text" className="form-control" onChange={event => setAssignee(event.target.value)}
                 value={assignee} required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" rows={3} onChange={event => setDescription(event.target.value)}
                    value={description} required/>
        </div>
        <button type="button" className="btn btn-primary mt-3" onClick={submitTodo}>Add Todo</button>
      </form>
    </div>
  );
};

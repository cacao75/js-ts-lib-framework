function TodoRowItem(props) {
  return (
    // click 하면 그 row를 삭제한다
    <tr onClick={ () => props.deleteTodo(props.rowNumber) }>
      <th scope="row">{ props.rowNumber }</th>
      <td>{ props.rowDescription }</td>
      <td>{ props.rowAssignee }</td>
    </tr>
  );
}

export default TodoRowItem;

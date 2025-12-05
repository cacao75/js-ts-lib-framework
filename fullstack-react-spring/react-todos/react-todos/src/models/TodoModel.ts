export default class TodoModel {
  rowNumber: number;
  rowDescription: string;
  rowAssignee: string;
  
  constructor(rowNumber: number, rowDescription: string, rowAssignee: string) {
    this.rowNumber = rowNumber;
    this.rowDescription = rowDescription;
    this.rowAssignee = rowAssignee;
  }
}

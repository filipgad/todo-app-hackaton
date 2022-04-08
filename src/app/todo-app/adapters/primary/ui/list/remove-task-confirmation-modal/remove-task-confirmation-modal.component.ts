import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {
  REMOVES_TASK_COMMAND,
  RemovesTaskCommandPort
} from "../../../../../application/ports/primary/removes-task.command-port";
import {RemovesTaskCommand} from "../../../../../application/ports/primary/removes-task.command";

@Component({
  selector: 'app-remove-task-confirmation-modal',
  templateUrl: './remove-task-confirmation-modal.component.html',
  styleUrls: ['./remove-task-confirmation-modal.component.scss']
})
export class RemoveTaskConfirmationModalComponent {

  constructor(
      @Inject(MAT_DIALOG_DATA) private _data: { taskId: string },
      @Inject(REMOVES_TASK_COMMAND) private _removesTaskCommand: RemovesTaskCommandPort,
  ) {}

  onConfirmClicked(): void {
    this._removesTaskCommand.removeTask(new RemovesTaskCommand(this._data.taskId));
  }
}

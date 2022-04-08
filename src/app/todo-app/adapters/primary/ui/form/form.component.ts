import {Component, Inject} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ADDS_TASK_COMMAND, AddsTaskCommandPort} from "../../../../application/ports/primary/adds-task.command-port";
import {AddsTaskCommand} from "../../../../application/ports/primary/adds-task.command";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  readonly taskField = new FormControl('');

  constructor(@Inject(ADDS_TASK_COMMAND) private _addsTaskCommand: AddsTaskCommandPort) { }

  onAddTaskClicked(): void {
    this._addsTaskCommand.addTask(new AddsTaskCommand(this.taskField.value));
    this.taskField.setValue('');
  }

}

import {InjectionToken} from "@angular/core";
import {ShowsRemoveTaskConfirmationModalCommand} from "./shows-remove-task-confirmation-modal.command";

export const SHOWS_REMOVE_TASK_CONFIRMATION_MODAL_COMMAND = new InjectionToken<ShowsRemoveTaskConfirmationModalCommandPort>(
    'SHOWS_REMOVE_TASK_CONFIRMATION_MODAL_COMMAND',
);

export interface ShowsRemoveTaskConfirmationModalCommandPort {
    showRemoveTaskConfirmationModal(command: ShowsRemoveTaskConfirmationModalCommand): void;
}

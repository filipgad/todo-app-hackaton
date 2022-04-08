import {TaskDTO} from "../secondary/task.dto";

export class TaskQuery {
    private constructor(
        readonly id: string,
        readonly value: string,
        readonly isDone: boolean
    ) {}

    static fromTaskDTO(dto: TaskDTO): TaskQuery {
        return new TaskQuery(
            dto.id,
            dto.value,
            dto.isDone
        );
    }
}

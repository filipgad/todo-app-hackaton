import {InjectionToken} from "@angular/core";
import {InMemoryStorage} from "../storage/in-memory/in-memory.storage";

export const TASK_STORAGE = new InjectionToken<InMemoryStorage<Task>>(
    'TASK_STORAGE',
);

import {Observable} from "rxjs";

export interface Storage<T> {
    set(id: string, value: T): void;
    get(id: string): T | undefined;
    getAll(): Observable<T[]>;
    remove(id: string): void;
}

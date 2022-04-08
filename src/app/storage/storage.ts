import {Observable} from "rxjs";

export interface Storage<T> {
    save(id: string, value: T): void;
    remove(id: string): void;
    getAll(): Observable<T[]>;
}

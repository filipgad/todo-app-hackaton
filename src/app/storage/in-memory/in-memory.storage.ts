import { Storage } from '../storage';
import {BehaviorSubject, map, Observable, ReplaySubject, take} from "rxjs";

export class InMemoryStorage<T> implements Storage<T> {
    private readonly _storeSubject$: BehaviorSubject<Map<string, T>> = new BehaviorSubject<Map<string, T>>(new Map());
    private readonly _store$: Observable<Map<string, T>> = this._storeSubject$.asObservable();

    save(id: string, value: T): void {
        const currentStorageMap = this._storeSubject$.value
        const newMap = new Map(currentStorageMap);
        newMap.set(id, value);
        this._storeSubject$.next(newMap);
    }

    get(id: string): T | undefined {
        return this._storeSubject$.value.get(id);
    }

    getAll(): Observable<T[]> {
        return this._store$.pipe(map(storeMap => [...storeMap.values()]));
    }

    remove(id: string): void {
        const currentStorageMap = this._storeSubject$.value
        const newMap = new Map(currentStorageMap);
        newMap.delete(id);
        this._storeSubject$.next(newMap);
    }
}

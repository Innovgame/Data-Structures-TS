import { ItemArray } from "./model";


export class Stack<T> implements IStack<T> {
    protected count: number;
    protected items: ItemArray<T>;

    constructor() {
        this.count = 0;
        this.items = Object.create(null);
    }
    push(val: T): void {
        this.items[this.count++] = val;
    }
    pop(): T {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[--this.count];
        delete this.items[this.count];
        return result;
    }
    peek(): T {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    isEmpty(): boolean {
        return this.count === 0;
    }
    size(): number {
        return this.count;
    }
    clear(): void {
        this.items = Object.create(null);
        this.count = 0;
    }
    toString(): string {
        if (this.isEmpty()) {
            return "";
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

export interface IStack<T> {
    push(val: T): void;
    pop(): T;
    peek(): T;
    isEmpty(): boolean;
    size(): number;
    clear(): void;
    toString(): string;
}

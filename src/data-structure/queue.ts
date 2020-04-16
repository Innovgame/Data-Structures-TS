import { ItemArray } from "./model";

export class Queue<T> implements IQueue<T> {
    protected items: ItemArray<T>;
    protected count: number;
    protected lowestCount: number;

    constructor() {
        this.items = Object.create(null);
        this.count = 0;
        this.lowestCount = 0;
    }
    clear(): void {
        this.count = this.lowestCount = 0;
        this.items = Object.create(null);
    }
    enqueue(element: T): void {
        this.items[this.count++] = element;
    }
    dequeue(): T {
        if (this.isEmpty()) {
            return null;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    peek(): T {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.lowestCount];
    }
    isEmpty(): boolean {
        return this.count === this.lowestCount;
    }
    size(): number {
        return this.count - this.lowestCount;
    }

    toString(): string {
        if (this.isEmpty()) {
            return "";
        }
        let returnStr = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            returnStr = `${returnStr},${this.items[i]}`;
        }
        return returnStr;
    }
}

export interface IQueue<T> {
    enqueue(element: T): void;
    dequeue(): T;
    peek(): T;
    isEmpty(): boolean;
    size(): number;
    clear(): void;
    toString(): string;
}

import { ItemArray } from "./model";

export class Queue<T> implements IQueue<T> {
    constructor() {}
    enqueue(element: T): void {
        throw new Error("Method not implemented.");
    }
    dequeue(): T {
        throw new Error("Method not implemented.");
    }
    peek(): T {
        throw new Error("Method not implemented.");
    }
    isEmpty(): boolean {
        throw new Error("Method not implemented.");
    }
    size(): number {
        throw new Error("Method not implemented.");
    }
}

export interface IQueue<T> {
    enqueue(element: T): void;
    dequeue(): T;
    peek(): T;
    isEmpty(): boolean;
    size(): number;
}

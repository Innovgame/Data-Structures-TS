import "mocha";
import { expect } from "chai";

import { Queue, Deque } from "../../src/data-structure/queue";

describe("Queue", () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue();
    });

    it("create queue", () => {
        expect(queue.size()).equal(0, "queue size");
        expect(queue.isEmpty()).equal(true, "queue is empty");
    });

    it("enqueue", () => {
        queue.enqueue(2);
        expect(queue.isEmpty()).equal(false);
        expect(queue.size()).equal(1);
        expect(queue.peek()).equal(2);
    });

    it("dequeue", () => {
        queue.enqueue(100);
        const num = queue.dequeue();

        expect(queue.isEmpty()).equal(true);
        expect(queue.size()).equal(0);
        expect(num).equal(100);
    });

    it("peek", () => {
        queue.enqueue(100);
        const num = queue.peek();

        expect(queue.size()).equal(1);
        expect(queue.isEmpty()).equal(false);
        expect(num).equal(100);
    });

    it("clear", () => {
        queue.enqueue(111);

        expect(queue.size()).eq(1);
        queue.clear();
        expect(queue.isEmpty()).equal(true);
    });

    it("implements FIFO logic", () => {
        queue.enqueue(1);
        expect(queue.peek()).equal(1);
        queue.enqueue(2);
        expect(queue.peek()).equal(1);
        queue.enqueue(3);
        expect(queue.peek()).equal(1);

        expect(queue.dequeue()).equal(1);
        expect(queue.dequeue()).equal(2);
        expect(queue.dequeue()).equal(3);
        expect(queue.dequeue()).equal(null);
        expect(queue.isEmpty()).equal(true);
    });

    it("toString", () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.toString()).equal("1,2,3");
    });
});

describe("Dequeue", () => {
    let dequeue: Deque<number>;

    beforeEach(() => {
        dequeue = new Deque();
    });

    it("create queue", () => {
        expect(dequeue.size()).equal(0, "queue size");
        expect(dequeue.isEmpty()).equal(true, "queue is empty");
    });

    it("enqueue", () => {
        dequeue.enqueue(2);
        expect(dequeue.isEmpty()).equal(false);
        expect(dequeue.size()).equal(1);
        expect(dequeue.peek()).equal(2);
    });

    it("dequeue", () => {
        dequeue.enqueue(100);
        const num = dequeue.dequeue();

        expect(dequeue.isEmpty()).equal(true);
        expect(dequeue.size()).equal(0);
        expect(num).equal(100);
    });

    it("peek", () => {
        dequeue.enqueue(100);
        const num = dequeue.peek();

        expect(dequeue.size()).equal(1);
        expect(dequeue.isEmpty()).equal(false);
        expect(num).equal(100);
    });

    it("clear", () => {
        dequeue.enqueue(111);

        expect(dequeue.size()).eq(1);
        dequeue.clear();
        expect(dequeue.isEmpty()).equal(true);
    });

    it("implements FIFO logic", () => {
        dequeue.enqueue(1);
        expect(dequeue.peek()).equal(1);
        dequeue.enqueue(2);
        expect(dequeue.peek()).equal(1);
        dequeue.enqueue(3);
        expect(dequeue.peek()).equal(1);

        expect(dequeue.dequeue()).equal(1);
        expect(dequeue.dequeue()).equal(2);
        expect(dequeue.dequeue()).equal(3);
        expect(dequeue.dequeue()).equal(null);
        expect(dequeue.isEmpty()).equal(true);
    });

    it("toString", () => {
        dequeue.enqueue(1);
        dequeue.enqueue(2);
        dequeue.enqueue(3);

        expect(dequeue.toString()).equal("1,2,3");
    });

    it("add front, remove back, peek back, peek front", () => {
        dequeue.addBack(222);
        dequeue.addFront(111);
        dequeue.addFront(333);
        expect(dequeue.size()).equal(3);
        expect(dequeue.peekBack()).equal(222);
        expect(dequeue.peekFront()).equal(333);
        expect(dequeue.removeBack()).equal(222);
        expect(dequeue.size()).equal(2);
    });
});

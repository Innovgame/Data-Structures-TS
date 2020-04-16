import "mocha";
import { expect } from "chai";

import { Queue } from "../../src/data-structure/queue";

describe("Queue", () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue();
    });

    it('create queue', () => {
        expect(queue.size()).equal(0, 'queue size');
        expect(queue.isEmpty()).equal(true, 'queue is empty');
    });

    it('enqueue', () => {
        queue.enqueue(2);
        expect(queue.isEmpty()).equal(false);
        expect(queue.size()).equal(1);
        expect(queue.peek()).equal(2);
    });

    it('dequeue', () => {
        queue.enqueue(100);
        const num = queue.dequeue();

        expect(queue.isEmpty()).equal(true);
        expect(queue.size()).equal(0);
        expect(num).equal(100);
    });

    it('peek', () => {
        queue.enqueue(100);
        const num = queue.peek();

        expect(queue.size()).equal(1);
        expect(queue.isEmpty()).equal(false);
        expect(num).equal(100);
    });

    it('clear', () => {
        queue.enqueue(111);

        expect(queue.size()).eq(1);
        queue.clear();
        expect(queue.isEmpty()).equal(true);
    });

    it('implements FIFO logic', () => {
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
    
    it('toString', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.toString()).equal('1,2,3');
    });
});

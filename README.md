# Data Structures

## init Project

### install webpack and webpack-cli

1.webpack

```sh
# 默认安装最新版本
$ npm install --save-dev webpack
# 安装指定版本
$ npm install --save-dev webpack@<version>
```

2.webpack-cli (4+版本需要安装)

```sh
# 4+版本需要独立安装webpack-cli
$ npm install --save-dev webpack-cli
```

### install typescript and ts-loader

1.typescript

```sh
# 默认安装最新版本
$ npm install --save-dev typescript
# 安装指定版本
$ npm install --save-dev typescript@<version>
```

2.ts-loader

```sh
# webpack 中ts的loader
$ npm install --save-dev ts-loader
```

### 一个简单的栈(Stack)实现

1.interface

```typescript
// 栈的interface
export interface IStack<T> {
    push(val: T): void;
    pop(): T;
    peek(): T;
    isEmpty(): boolean;
    size(): number;
    clear(): void;
    toString(): string;
}
```

2.Stack 实现 IStack

```typescript
// 一个简单的栈实现
interface Items<T> {
    [index: number]: T;
}

export class Stack<T> implements IStack<T> {
    protected count: number;
    protected items: Items<T>;

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
```

3.使用

```typescript
const stack = new Stack<string>();

stack.push("111");
stack.push("222");
stack.push("333");

console.log(stack.peek()); // '333'
console.log(stack.pop()); // '333'

console.log(stack);
// Stack {
//     count: 2
//     items: {0: "111", 1: "222"}
//     __proto__: Object
// }
```

### 测试

1.安装需要的库

```sh
# mocha
$ yarn add --dev mocha @types/mocha
# chai
$ yarn add --dev chai @types/chai
# ts-node
$ yarn add --dev ts-node
```

2.测试用例

新建 `/test/**/*.spec.ts`对应的测试文件

```typescript
// stack.spec.ts
import { Stack } from "../../src/data-structure/index";
import { expect } from "chai";
import "mocha";

describe("Stack", () => {
    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack<number>();
    });

    it("starts empty", () => {
        expect(stack.size()).to.equal(0);
        expect(stack.isEmpty()).to.equal(true);
    });

    it("pushes elements", () => {
        stack.push(1);
        expect(stack.size()).to.equal(1);
        stack.push(2);
        expect(stack.size()).to.equal(2);
        stack.push(3);
        expect(stack.size()).to.equal(3);

        expect(stack.isEmpty()).to.equal(false);
    });
    // ...等等
});
```

3.运行

在`package.json`中添加对应`script`
其中 `env TS_NODE_COMPILER_OPTIONS='{\"module\": \"commonjs\" }'`设置`ts-node`环境变量

```diff
"scripts": {
++  "test:ts": "env TS_NODE_COMPILER_OPTIONS='{\"module\": \"commonjs\" }' npx mocha -r ts-node/register ./test/**/*.spec.ts",
++  "test": "npm run test:ts",
}

```

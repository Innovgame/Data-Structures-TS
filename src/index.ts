import "./style.css";
import { Stack } from "./data-structure/index";
import { test } from "./test";

if (module.hot) {
    module.hot.accept("./data-structure/stack.ts", function () {
        console.log("Accepting the updated test module!");
    });
}

const stack = new Stack<string>();

stack.push("111");
stack.push("222");
stack.push("333");

console.log(stack.peek());
console.log(stack.pop());

console.log(stack);

test();

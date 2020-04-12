import { test } from "./test";

import "./style.css";

if (module.hot) {
    module.hot.accept("./test.ts", function () {
        console.log("Accepting the updated test module!");
        test();
    });
}

console.log("init...");
const title = document.createElement("h2");
title.innerHTML = "Data Structures";
title.className = "hello";
document.body.append(title);
test();

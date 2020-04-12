import {
    test
} from './test';

import './style.css'; // hello class

console.log('init...');
const title = document.createElement('h1');
title.innerHTML = 'Data Structures';
title.className = 'hello';
document.body.append(title);
test();
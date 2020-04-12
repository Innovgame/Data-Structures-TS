import {
    test
} from './test';

import './style.css'; // hello class

if (module.hot) {
    module.hot.accept('./test.js', function() {
        console.log('Accepting the updated test module!');
        test();
    })
}

console.log('init...');
const title = document.createElement('h2');
title.innerHTML = 'Data Structures';
title.className = 'hello';
document.body.append(title);
test();

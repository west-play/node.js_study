#!/usr/bin/env node
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// rl.question('예제가 재밌니???? (y/n)', (answer) => {
//     if (answer === 'y') {
//         console.log('고마워~~!~');
//     } else if (answer === 'n') {
//         console.log('재미없어서 미안해~~@');
//     } else {
//         console.log('y나 n만 입력해줘~~');
//     }
//     rl.close();
// });



console.clear();
const answerCallback = (answer) => {
    if (answer === 'y') {
        console.log('고마워~~');
        rl.close();
    } else if (answer === 'n') {
        console.log('미안해~~~');
    } else {
        console.clear();
        console.log('y나 n만 입력해줘~~');
        rl.question('예제가 재밌니???? (y/n)', answerCallback);
    }
};

rl.question('예제가 재밌니???? (y/n)', answerCallback);
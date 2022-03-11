const test = ['ama', 'ovo', 'roma é amor', 'ema', 'otto'];
const checkpalindrome = str => str === str.split('').reverse().join('');

console.log(test.map(checkpalindrome));
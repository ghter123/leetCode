/**
 * @param {number} n
 * @return {number}
 */

const fibNums = [0,1]
for(let i=2;i<=100;i++) {
    fibNums[i] = (fibNums[i-1] + fibNums[i-2]) % 1000000007
}

var fib = function (n) {
    return fibNums[n]
};

console.log(fib(79))
var n = 19;
var sum = 0;
sum = n.toString().split('')
var failsafe = 0;

while (sum != 1) {
    for (let i = 0; i < sum.length - 1; i++) {
        sum = Math.pow(sum[i], 2) + Math.pow(sum[i + 1], 2);
    }
    console.log(sum);

    failsafe++;
    if (failsafe > 3) {
        console.log("Failsafe");
        break;
    }
}

console.log(sum);
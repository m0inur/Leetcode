var countPrimes = function (n) {
    var prime = 0;
    var isPrime = true;

    for (let i = 2; i < n; i++) {
        for (let x = 2; x * x <= i; x++) {
            if (i % x == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            prime++;
        }
        isPrime = true;
    }

    return prime;
};
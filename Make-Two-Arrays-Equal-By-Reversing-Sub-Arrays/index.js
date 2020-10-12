var canBeEqual = function (target, arr) {
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);

    for (let i = 0; i < Math.max(arr.length, target.length); i++) {
        if (arr[i] != target[i]) {
            return false;
        }
    }

    return true;
};
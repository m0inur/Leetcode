var frequencySort = function(s) {
    s = s.split('');
    s.sort();

    let stringMap = new Map();
    let ans = "";

    let frequency = 1;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i + 1]) {
            frequency++;
        } else {
            stringMap.set(s[i], frequency);
            frequency = 1;
        }
    }

    // Sort map by frequency
    stringMap = new Map([...stringMap.entries()].sort((a, b) => b[1] - a[1]));

    for(let [key, value] of stringMap) {
        ans += key.repeat(value);
    }

    return ans;
};
/**
 * @param {number} num
 * @return {[]}
 */
let countBits = function(num) {
    let oneOccurArr = [];

    for(let i = 0; i <= num; i++) {
        let binary = (i >>> 0).toString(2).split('');
        let oneOccurCount = 0;

        while (binary.includes("1")) {
            let index = binary.indexOf("1");
            binary.splice(index, 1);
            oneOccurCount++;
        }

        oneOccurArr.push(oneOccurCount);
    }

    return oneOccurArr;
};
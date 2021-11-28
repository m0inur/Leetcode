/**
 * @param {number[]} colors
 * @return {number}
 */
let maxDistance = function(colors) {
    let waiting = [];
    let indexes = [];

    let max = -1;

    for (let i = 0; i < colors.length; i++) {
        for(let j = 0; j < waiting.length; j++) {
            if(waiting[j] === colors[i]){
                continue;
            }

            max = Math.max(max, i - indexes[j])
        }

        indexes.push(i);
        waiting.push(colors[i]);
    }

    return max;
};
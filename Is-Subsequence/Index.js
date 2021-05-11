/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isSubsequence = function (s, t) {
    let indexes = [];
    t = t.split('');
    
    for (let i = 0; i < s.length; i++) {
        let index = t.indexOf(s[i]);

        if (index !== -1) {
            indexes.push(index);
            t.splice(index, 1);

            if(indexes.length > 1) {
                let indexesLen = indexes.length;
                if (indexes[indexesLen - 2] > indexes[indexesLen - 1]) {
                    let hasFoundNewIndex = true;
                    let target = s[indexesLen - 1];
                    let currentTargetIndex = indexes[indexesLen - 2];

                    if(t.length === 0) return false;
                    
                    for(let j = 0; j < t.length; j++) {
                        let targetI = t.indexOf(target);
                        
                        if(targetI === -1) {
                            return false;
                        } else {
                            if(currentTargetIndex < targetI) {
                                indexes[indexesLen - 1] = targetI;
                                hasFoundNewIndex = true;
                                break;
                            }
                        }
                        
                        t.splice(targetI, 1);
                    }
                
                    if(!hasFoundNewIndex) {
                        return false;
                    }
                }
            }
        } else {
            return false;
        }
    }

    return true;
};
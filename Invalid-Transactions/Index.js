/**
 * @param {string[]} transactions
 * @return {string[]}
 */
let invalidTransactions = function(transactions) {
    let invalid = [];
    
    for(let i = 0; i < transactions.length; i++) {
        // 0 => name
        // 1 => time
        // 2 => amount
        // 3 => city
        let transactionI = transactions[i].split(',');
        if (transactionI[2] > 1000) {
            invalid.push(transactions[i]);
            continue;
        }

        for (let j = 0; j < transactions.length; j++) {
            if(i === j) continue;
            let transactionJ = transactions[j].split(',');
            let timeDiff = Math.abs(transactionI[1] - transactionJ[1]);
            
            if(timeDiff <= 60 && transactionI[0] === transactionJ[0] && transactionI[3] !== transactionJ[3]) {
                invalid.push(transactions[i]);
                break;
            }
        }
    }
    
    return invalid;
};
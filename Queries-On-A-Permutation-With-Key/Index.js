/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
let processQueries = function(queries, m) {
    let permutations = [];
    let ans = [];
    
    for(let i = 1; i <= m ; i++) {
       permutations.push(i); 
    }
    
    for(let i = 0; i < queries.length; i++) {
        let index = permutations.indexOf(queries[i]);
        ans.push(index);
        permutations.splice(index, 1);
        permutations.unshift(queries[i]);
    }
    
    return ans;
};
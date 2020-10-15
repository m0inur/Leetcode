var kidsWithCandies = function (candies, extraCandies) {
    var ans = [];
    var maxCandys = Math.max(...candies);

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxCandys) {
            ans.push(true);
        } else {
            ans.push(false);
        }
    }

    return ans;
};
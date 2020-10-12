var maxProfit = function (stocks) {
    if (stocks.join('') == [...stocks].sort((a, b) => b - a).join('')) {
        return 0;
    } else if (stocks.indexOf(Math.max(...stocks)) > stocks.indexOf(Math.min(...stocks))) {
        return Math.max(...stocks) - Math.min(...stocks);
    } else {
        var profit = 0;

        for (let i = 0; i < stocks.length; i++) {
            for (let j = i; j < stocks.length; j++) {
                if (stocks[i] < stocks[j]) {
                    profit = Math.max(stocks[j] - stocks[i], profit);
                }
            }
        }
        return profit;
    }
}
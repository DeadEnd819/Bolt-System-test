const getProfit = (curr) => {
    const profit = curr.price * curr.qnt;
    return curr.type === 'BUY' ? -profit : profit;
};

const main = (operations) => {
    let profit;
    let ticker;
    return operations.reduce((acc, curr) => {
        profit = getProfit(curr);
        ticker = curr.ticker;
        acc.absProfit += profit;
        acc.portfolio[ticker] =
          (acc.portfolio[ticker] ?
            acc.portfolio[ticker] : 0) + profit;
        return acc;
    }, { absProfit: 0, portfolio: {} });
}

module.exports = main;

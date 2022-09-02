const getRewardPoint = (amount) =>
  Math.max(0, amount - 100) * 2 + Math.min(50, Math.max(0, amount - 50)) * 1;

export const getAggregatedReward = (transactions) => {
  if (!transactions) {
    return;
  }

  return transactions.map((transaction) => {
    const rewards = transaction.transactions.reduce(
      (prevRewards, transaction) => {
        const month = transaction.date.slice(0, 7);
        const reward = getRewardPoint(transaction.amount);

        if (prevRewards[month]) {
          prevRewards[month] += reward;
        } else {
          prevRewards[month] = reward;
        }

        return prevRewards;
      },
      {}
    );

    const totalReward = Object.values(rewards).reduce(
      (sum, reward) => sum + reward,
      0
    );

    return {
      name: transaction.user.name,
      photo: transaction.user.picture.thumbnail,
      ...rewards,
      totalReward,
    };
  });
};

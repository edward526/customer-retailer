// TODO: Use API to get transaction records
export const getTransactions = async () => {
  if (Math.random() > 0.7) {
    throw new Error("Error getting transactions data");
  }

  // Generate 5 random people
  const users = await Promise.all(
    new Array(5).fill(0).map(async () => {
      const data = await fetch("https://randomuser.me/api/").then((res) =>
        res.json()
      );
      return {
        name: `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`,
        phone: data.results[0].phone,
        picture: data.results[0].picture,
      };
    })
  );

  // Generate transaction record for last 3 months
  const transactions = users.map((user) => ({
    user,
    transactions: new Array(90).fill(0).map((value, index) => {
      const date = new Date();
      date.setDate(date.getDate() - index);

      return {
        date: date.toISOString(),
        amount: Math.floor(Math.random() * 300),
      };
    }),
  }));

  return transactions;
};

import { getMonthString, subtractMonths } from "../../utils/date";
import "./RewardTable.css";

export const RewardTable = ({ data }) => {
  if (!data || !data.length) {
    return <div>No Data</div>;
  }

  const today = new Date();

  const firstMonthKey = getMonthString(today);
  const secondMonthKey = getMonthString(subtractMonths(today, 1));
  const thirdMonthKey = getMonthString(subtractMonths(today, 1));

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th colSpan={2}>User</th>
          <th colSpan={4}>Reward</th>
        </tr>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Photo</th>
          <th>{firstMonthKey}</th>
          <th>{secondMonthKey}</th>
          <th>{thirdMonthKey}</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {data.map((record, index) => (
          <tr key={`reward-${index}`}>
            <td style={{ padding: "0 8px" }}>{index}</td>
            <td>{record.name}</td>
            <td>
              <img src={record.photo} alt={record.name} />
            </td>
            <td>{record[firstMonthKey] || 0}</td>
            <td>{record[secondMonthKey] || 0}</td>
            <td>{record[thirdMonthKey] || 0}</td>
            <td>{record.totalReward}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

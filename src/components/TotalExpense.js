import { formatPercent, formatStringAmount } from "../helpers";

function TotalExpense({ amount, total }) {
  return (
    <div className="budget__expenses clearfix">
      <div className="budget__expenses--text">Expenses</div>
      <div className="right clearfix">
        <div className="budget__expenses--value">
          {formatStringAmount(amount)}
        </div>
        <div className="budget__expenses--percentage">
          {formatPercent(amount, total)}
        </div>
      </div>
    </div>
  );
}

export default TotalExpense;

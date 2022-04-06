import TotalAmount from "./TotalAmount";
import TotalIncome from "./TotalIncome";
import TotalExpense from "./TotalExpense";

function BudgetHeader() {
  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in{" "}
          <span className="budget__title--month">%Month%</span>:
        </div>
        <TotalAmount />
        <TotalIncome />
        <TotalExpense />
      </div>
    </div>
  );
}

export default BudgetHeader;

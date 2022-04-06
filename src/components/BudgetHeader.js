import TotalAmount from "./TotalAmount";
import TotalIncome from "./TotalIncome";
import TotalExpense from "./TotalExpense";

import useBudgetData from "../hooks/useBudgetData";
import { defiMonth } from "../helpers";

function BudgetHeader() {
  const { totalAmount, totalAmountIncomes, totalAmountExpenses } =
    useBudgetData();

  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in{" "}
          <span className="budget__title--month">{defiMonth()}</span>:
        </div>
        <TotalAmount amount={totalAmount} />
        <TotalIncome amount={totalAmountIncomes} />
        <TotalExpense amount={totalAmountExpenses} total={totalAmount} />
      </div>
    </div>
  );
}

export default BudgetHeader;

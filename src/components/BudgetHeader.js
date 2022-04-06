import TotalAmount from "./TotalAmount";
import TotalIncome from "./TotalIncome";
import TotalExpense from "./TotalExpense";

import { useSelector } from "react-redux";
import { calAmount } from "../helpers";

function BudgetHeader() {
  const listData = useSelector((state) => state.listDataIncome);
  const listIncomes = listData.filter((dataItem) => dataItem.amount > 0);
  const listExpenses = listData.filter((dataItem) => dataItem.amount < 0);

  const totalAmountIncomes = calAmount(listIncomes);
  const totalAmountExpenses = calAmount(listExpenses);
  const totalAmount = totalAmountIncomes + totalAmountExpenses;

  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in{" "}
          <span className="budget__title--month">%Month%</span>:
        </div>
        <TotalAmount amount={totalAmount} />
        <TotalIncome amount={totalAmountIncomes} />
        <TotalExpense amount={totalAmountExpenses} total={totalAmount} />
      </div>
    </div>
  );
}

export default BudgetHeader;

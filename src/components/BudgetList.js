import BudgetIncomes from "./BudgetIncomes";
import BudgetExpenses from "./BudgetExpenses";

import { useSelector } from "react-redux";
import { calAmount } from "../helpers";

function BudgetList() {
  const listData = useSelector((state) => state.listDataIncome);
  const listIncomes = listData.filter((dataItem) => dataItem.amount > 0);
  const listExpenses = listData.filter((dataItem) => dataItem.amount < 0);

  const totalAmountIncomes = calAmount(listIncomes);

  return (
    <div className="container clearfix">
      <BudgetIncomes listData={listIncomes} />
      <BudgetExpenses listData={listExpenses} total={totalAmountIncomes} />
    </div>
  );
}

export default BudgetList;

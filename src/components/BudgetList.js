import BudgetIncomes from "./BudgetIncomes";
import BudgetExpenses from "./BudgetExpenses";

import useBudgetData from "../hooks/useBudgetData";

function BudgetList() {
  const { listIncomes, listExpenses, totalAmountIncomes } = useBudgetData();

  return (
    <div className="container clearfix">
      <BudgetIncomes listData={listIncomes} />
      <BudgetExpenses listData={listExpenses} total={totalAmountIncomes} />
    </div>
  );
}

export default BudgetList;

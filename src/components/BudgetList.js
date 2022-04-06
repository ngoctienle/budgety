import BudgetIncomes from "./BudgetIncomes";
import BudgetExpenses from "./BudgetExpenses";

function BudgetList() {
  return (
    <div className="container clearfix">
      <BudgetIncomes />
      <BudgetExpenses />
    </div>
  );
}

export default BudgetList;

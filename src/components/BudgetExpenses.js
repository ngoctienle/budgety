import Item from "./Item";

function BudgetExpenses() {
  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>
      <div className="expenses__list">
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default BudgetExpenses;

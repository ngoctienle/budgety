import Item from "./Item";

function BudgetIncomes() {
  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>
      <div className="income__list">
        <Item />
        <Item />
      </div>
    </div>
  );
}

export default BudgetIncomes;

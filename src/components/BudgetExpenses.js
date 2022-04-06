import Item from "./Item";

function BudgetExpenses({ listData, total }) {
  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>
      <div className="expenses__list">
        {listData.map((dataItem) => (
          <Item data={dataItem} total={total} key={dataItem.id} />
        ))}
      </div>
    </div>
  );
}

export default BudgetExpenses;

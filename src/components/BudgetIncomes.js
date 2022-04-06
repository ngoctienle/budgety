import Item from "./Item";

function BudgetIncomes({ listData }) {
  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>
      <div className="income__list">
        {listData.map((dataItem) => (
          <Item data={dataItem} key={dataItem.id} />
        ))}
      </div>
    </div>
  );
}

export default BudgetIncomes;
